import type { LoaderArgs } from "@remix-run/node";
import pMap from 'p-map'

import { getSession } from "~/cookie.server";
import { eventStream } from "remix-utils";
import { createActivityListStream, processActivity } from "~/strava";

export const loader = async ({ request }: LoaderArgs) => {
  const session = await getSession(request)
  const accessToken = session.get('accessToken')
  if (!accessToken) {
    return null
  }

  const uniqueWainwrightIdSet = new Set()

  return eventStream(request.signal, (send) => {
    const stream = createActivityListStream({ accessToken, perPage: 30 })

    pMap(stream, (stravaActivity) => {
      const activity = processActivity(stravaActivity)
      send({
        event: "activity", data: JSON.stringify({
          index: stravaActivity.index,
          activity
        })
      });

      if (activity) {
        for (const wainwright of activity.wainwrights) {
          if (!uniqueWainwrightIdSet.has(wainwright.id)) {
            send({
              event: "wainwright",
              data: JSON.stringify(wainwright)
            })
            uniqueWainwrightIdSet.add(wainwright.id)
          }
        }
      }
    }, {
      concurrency: 1
    })

    return () => {
      // cleanup
    }
  });
}
