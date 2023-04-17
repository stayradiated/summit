import { useLoaderData } from '@remix-run/react'
import type { LoaderFunction, LinksFunction } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'
import { ClientOnly } from 'remix-utils'
import leafletStyles from 'leaflet/dist/leaflet.css'
import { getSession, destroySessionHeaders } from '~/cookie.server'
import { ActivityList } from '~/components/activity-list'
import { Logo } from '~/components/logo'
import { WainwrightCount } from '~/components/wainwright-count'
import type { Wainwright } from '~/data'
import { wainwrightList, wainwrightRecord } from '~/data'
import styles from '~/styles.css'
import { destroyActivityList } from '~/localstorage'
import { useWainwrights } from '~/hooks/use-wainwrights'
import { MyMap } from '~/components/map.client'

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: leafletStyles },
  ]
}

type LoaderData = {
  athlete: {
    username: string
    firstName: string
    lastName: string
  }
  wainwrightRecord: Record<string, Wainwright>
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request)
  const athlete = session.get('athlete')
  const accessToken = session.get('accessToken')
  if (!athlete || !accessToken) {
    return redirect('/', {
      headers: await destroySessionHeaders(session),
    })
  }

  return json({ athlete, wainwrightRecord })
}

export default function route() {
  const { athlete, wainwrightRecord } = useLoaderData<LoaderData>()

  const { isLoading, fullActivityList, activityList, baggedWainwrightIds } =
    useWainwrights()

  const wainwrightMarkers = wainwrightList
    .map((wainwright) => ({
      title: `${wainwright.name} (${wainwright.area})`,
      position: wainwright.coords,
      area: wainwright.area,
      bagged: baggedWainwrightIds.includes(wainwright.id),
    }))
    .sort((a, b) => {
      return (a.bagged ? 1 : 0) - (b.bagged ? 1 : 0)
    })

  console.log({ wainwrightMarkers })

  const handleLogout = () => {
    destroyActivityList()
  }

  return (
    <div>
      <header className="header">
        <div className="logo-container-small">
          <Logo />
          <h1 className="app-title">Summit</h1>
        </div>

        <div className="session">
          <span>
            Logged in as {athlete.firstName} {athlete.lastName}.
          </span>
          <form action="/logout" method="post" className="logout-form">
            <button
              type="submit"
              className="logout-button"
              onClick={handleLogout}
            >
              Logout
            </button>
          </form>
        </div>
      </header>

      {isLoading && (
        <p className="loading-message">
          <span className="timer-loader" />
          Fetching data from Strava...
        </p>
      )}

      <ClientOnly>
        {() => (
          <>
            <p>Scanned {fullActivityList.length} activities from Strava.</p>
            <WainwrightCount wainwrights={baggedWainwrightIds} />

            <h3>Map</h3>
            <MyMap markers={wainwrightMarkers} />

            <ActivityList
              activities={activityList}
              wainwrightRecord={wainwrightRecord}
            />
          </>
        )}
      </ClientOnly>
    </div>
  )
}
