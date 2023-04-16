import { fetchActivityListPage, processActivity } from "~/strava";
import { getSession } from "~/cookie.server";
import { json } from "@remix-run/node";

import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request)
  const accessToken = session.get("accessToken")
  if (!accessToken) {
    throw new Error('Not authenticated!')
  }

  const page = Number.parseInt(new URL(request.url).searchParams.get('page') ?? '1')

  const activityList = await fetchActivityListPage({ accessToken, perPage: 30, page })
  if (activityList instanceof Error) {
    throw activityList
  }

  return json(activityList.map((activity) => {
    return processActivity(activity)
  }))
}
