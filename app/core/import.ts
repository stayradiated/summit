import type { Session } from '@prisma/client'
import pMap from 'p-map'
import { errorBoundary } from '@stayradiated/error-boundary'
import {
  fetchActivityListPage,
  transformStravaActivity,
  processActivity,
} from './strava'
import { createGlobalVariable } from './global.server'
import {
  upsertActivity,
  upsertAscent,
  getAthlete,
  getHills,
  HillClassification,
} from './index'

type ImportActivitiesFromPageOptions = {
  session: Session
  page: number
  perPage: number
}

type ImportResult = {
  receivedCount: number
  unseenCount: number
}

const importActivitiesFromPage = async (
  options: ImportActivitiesFromPageOptions,
): Promise<ImportResult | Error> => {
  const { session, page, perPage } = options
  const { accessToken } = session

  if (perPage > 100) {
    return new Error('per_page must be <= 100')
  }

  const athlete = await getAthlete({ id: session.athleteId })
  if (athlete instanceof Error) {
    return athlete
  }

  const hillList = await getHills({
    classification: HillClassification.Wainwright,
  })
  if (hillList instanceof Error) {
    return hillList
  }

  const stravaActvityList = await fetchActivityListPage({
    accessToken,
    perPage,
    page,
  })
  if (stravaActvityList instanceof Error) {
    return stravaActvityList
  }

  const processedActivities = await pMap(
    stravaActvityList,
    async (stravaActivity) => {
      const activity = await upsertActivity(
        transformStravaActivity({
          athlete,
          stravaActivity,
        }),
      )

      const isNewActivity =
        activity.createdAt.getTime() === activity.updatedAt.getTime()

      const ascentList = processActivity({
        activity,
        hillList,
      })
      await pMap(
        ascentList,
        async (ascent) => {
          return upsertAscent(ascent)
        },
        { concurrency: 1 },
      )

      return { isNewActivity }
    },
    { concurrency: 1 },
  )

  console.log({ processedActivities })

  const unseenCount = processedActivities.filter((result) => {
    return result.isNewActivity
  }).length

  return {
    receivedCount: stravaActvityList.length,
    unseenCount,
  }
}

type ImportAllActivitiesOptions = {
  session: Session
}

const importAllActivities = async (
  options: ImportAllActivitiesOptions,
): Promise<void | Error> => {
  const { session } = options
  const perPage = 30

  return errorBoundary(async () => {
    let page = 1
    while (true) {
      const result = await importActivitiesFromPage({ session, page, perPage })
      console.log({ result })
      if (result instanceof Error) {
        return result
      }

      if (result.receivedCount < perPage) {
        break
      }

      if (result.unseenCount < 15) {
        break
      }

      page += 1
    }
  })
}

const globalCache = createGlobalVariable('import', () => new Map())

type ScheduleImportOptions = {
  session: Session
}

const scheduleImport = async (options: ScheduleImportOptions) => {
  const { session } = options
  importAllActivities({ session }).then((result) => {
    if (result instanceof Error) {
      console.error(result)
    }
  })
}

export { scheduleImport }
