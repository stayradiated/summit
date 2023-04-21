import { useLoaderData } from '@remix-run/react'
import type { LoaderFunction, LinksFunction } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'
import { ClientOnly } from 'remix-utils'
import leafletStyles from 'leaflet/dist/leaflet.css'
import type { Hill } from '@prisma/client'
import { getSession } from '~/cookie.server'
import { ActivityList } from '~/components/activity-list'
import { Logo } from '~/components/logo'
import { WainwrightCount } from '~/components/wainwright-count'
import styles from '~/styles.css'
import { destroyActivityList } from '~/localstorage'
import { useHills } from '~/hooks/use-hills'
import { MyMap } from '~/components/map.client'
import type { MarkerConfig } from '~/components/map.client'
import { getAthlete, getHills, HillClassification } from '~/core'
import { recordFromList } from '~/utils'

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
  hillList: Hill[]
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request)
  console.log(session)
  if (!session.isValid) {
    return redirect('/', {
      headers: await session.destroyHeaders(),
    })
  }

  const athlete = await getAthlete({ id: session.athleteId })

  const hillList = await getHills({
    classification: HillClassification.Wainwright,
  })

  return json({ athlete, hillList })
}

export default function route() {
  const { athlete, hillList } = useLoaderData<LoaderData>()

  const { isLoading, fullActivityList, activityList, baggedHillIds } =
    useHills()

  const hillRecord = recordFromList(hillList, (item) => item.id)

  const hillMarkers = hillList
    .map(
      (hill): MarkerConfig => ({
        title: `${hill.name} (${hill.area})`,
        area: hill.area,
        position: [hill.latitude, hill.longitude],
        bagged: baggedHillIds.includes(hill.id),
      }),
    )
    .sort((a, b) => {
      return (a.bagged ? 1 : 0) - (b.bagged ? 1 : 0)
    })

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
            <WainwrightCount
              baggedHillIds={baggedHillIds}
              totalHillCount={Object.keys(hillRecord).length}
            />

            <h3>Map</h3>
            <MyMap markers={hillMarkers} />

            <ActivityList activities={activityList} hillRecord={hillRecord} />
          </>
        )}
      </ClientOnly>
    </div>
  )
}
