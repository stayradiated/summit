import { json } from '@remix-run/node'
import type { LoaderFunction } from '@remix-run/node'
import pMap from 'p-map'
import {
  fetchActivityListPage,
  transformStravaActivity,
  processActivity,
} from '~/strava'
import { getSession } from '~/cookie.server'
import {
  upsertActivity,
  upsertAscent,
  getAthlete,
  getHills,
  getActivityWithAscentList,
  HillClassification,
} from '~/core'

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request)
  if (!session.isValid) {
    throw session.error
  }

  const { accessToken } = session

  const athlete = await getAthlete({ id: session.athleteId })
  if (athlete instanceof Error) {
    throw athlete
  }

  const hillList = await getHills({
    classification: HillClassification.Wainwright,
  })
  if (hillList instanceof Error) {
    throw hillList
  }

  const page = Number.parseInt(
    new URL(request.url).searchParams.get('page') ?? '1',
    10,
  )
  const perPage = Number.parseInt(
    new URL(request.url).searchParams.get('per_page') ?? '30',
    10,
  )
  if (perPage > 100) {
    throw new Error('per_page must be <= 100')
  }

  const stravaActvityList = await fetchActivityListPage({
    accessToken,
    perPage,
    page,
  })
  if (stravaActvityList instanceof Error) {
    throw stravaActvityList
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

      return getActivityWithAscentList({
        id: activity.id,
      })
    },
    { concurrency: 1 },
  )

  return json(activityList)
}
