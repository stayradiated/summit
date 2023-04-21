import { type Session } from '@prisma/client'
import pMap from 'p-map'
import {
  fetchActivityListPage,
  transformStravaActivity,
  processActivity,
} from './strava'
import {
  upsertActivity,
  upsertAscent,
  getAthlete,
  getHills,
  getActivityWithAscentList,
  HillClassification,
} from './index'

type ImportActivitiesOptions = {
  session: Session
  page: number
  perPage: number
}

const importActivities = async (
  options: ImportActivitiesOptions,
): Promise<void | Error> => {
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

  const activityList = await pMap(
    stravaActvityList,
    async (stravaActivity) => {
      const activity = await upsertActivity(
        transformStravaActivity({
          athlete,
          stravaActivity,
        }),
      )

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
    },
    { concurrency: 1 },
  )
}

export { importActivities }
