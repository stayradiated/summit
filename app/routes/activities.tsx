import { useLoaderData } from "@remix-run/react"
import type { LoaderFunction, LinksFunction } from "@remix-run/node"
import { redirect } from "@remix-run/node"
import { decode as decodePolyline } from '@mapbox/polyline'

import { getSession, destroySessionHeaders } from "~/cookie.server"
import { newLineString, newPoint, pointInsideLakeDistrict, distanceFromLine } from '~/turf.server'
import { wainwrightList, wainwrightRecord, Wainwright } from "~/data"
import { fetchActivityList } from '~/strava'
import { ActivityList } from '~/components/activity-list'
import { Logo } from '~/components/logo'
import { WainwrightCount } from "~/components/wainwright-count"

import styles from '~/styles.css'

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
}

type Activity = {
  name: string
  type: string
  date: string
  wainwrights: Wainwright[]
}

type LoaderData = {
  athlete: {
    username: string,
    firstName: string,
    lastName: string,
  }
  activities: Activity[]
  wainwrights: Wainwright[]
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request)
  const athlete = session.get('athlete')
  const accessToken =  session.get('accessToken')
  if (!athlete || !accessToken) {
    return redirect('/', {
      headers: await destroySessionHeaders(session)
    })
  }

  const stravaActivityList = await fetchActivityList(accessToken, 1)

  const relevantActivities = stravaActivityList.items.filter((activity) => {
    const startPoint = newPoint(activity.start_latlng)
    const endPoint = newPoint(activity.end_latlng)
    return pointInsideLakeDistrict(startPoint) || pointInsideLakeDistrict(endPoint)
  })

  const activities: Activity[] = relevantActivities.map((activity) => {
    const activityTrack = newLineString(decodePolyline(activity.map.summary_polyline))

    const list = wainwrightList.map((wainwright) => {
      const distance = distanceFromLine(activityTrack, newPoint(wainwright.coords))
      return { id: wainwright.id, distance }
    })
    const baggedList = list.filter((item) => {
      return item.distance <= 0.05
    })
    const baggedWainwrightList = baggedList.map((item) => {
      return wainwrightRecord[item.id]
    })

    return { name: activity.name, type: activity.type, date: activity.start_date, wainwrights: baggedWainwrightList }
  })

  const uniqueWainwrightIdSet = [...new Set(activities.flatMap((activity) => {
    return activity.wainwrights.map((wainwright) => {
      return wainwright.id
    })
  }))]
  const wainwrights = uniqueWainwrightIdSet.map((id) => {
    return wainwrightRecord[id]
  })

  return { athlete, activities, wainwrights }
}

export default function route () {
  const { athlete, wainwrights, activities } = useLoaderData<LoaderData>()

  return (
    <div>
      <header className='header'>

        <div className='logo-container-small'>
          <Logo />
          <h1 className='app-title'>Summit</h1>
        </div>

        <p className='session'>Logged in as {athlete.firstName} {athlete.lastName}.
          <form action="/logout" method="post" className='logout-form'>
            <button type="submit" className="logout-button">
              Logout
            </button>
          </form>
        </p>

      </header>

      <WainwrightCount wainwrights={wainwrights} />
      <ActivityList activities={activities} />
    </div>
  )
}
