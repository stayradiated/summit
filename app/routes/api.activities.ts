import { json } from '@remix-run/node'
import type { LoaderFunction } from '@remix-run/node'
import { fetchActivityListPage, processActivity } from '~/strava'
import { getSession } from '~/cookie.server'

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request)
  const accessToken = session.get('accessToken')
  if (!accessToken) {
    throw new Error('Not authenticated!')
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

  const activityList = await fetchActivityListPage({
    accessToken,
    perPage,
    page,
  })
  if (activityList instanceof Error) {
    throw activityList
  }

  return json(
    activityList.map((activity) => {
      return processActivity(activity)
    }),
  )
}
