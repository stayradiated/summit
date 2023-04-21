import type { LoaderFunction, LinksFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { ClientOnly } from 'remix-utils'
import leafletStyles from 'leaflet/dist/leaflet.css'
import type { Hill } from '@prisma/client'
import { superjson, useSuperLoaderData } from '~/superjson'
import { getSession } from '~/cookie.server'
import { ActivityList } from '~/components/activity-list'
import { Logo } from '~/components/logo'
import { WainwrightCount } from '~/components/wainwright-count'
import styles from '~/styles.css'
import { MyMap } from '~/components/map.client'
import type { MarkerConfig } from '~/components/map.client'
import {
  getAthlete,
  getAthleteActivityList,
  getHills,
  HillClassification,
  type ActivityWithAscentList,
} from '~/core'
import { recordFromList } from '~/core/utils'

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
  activityList: ActivityWithAscentList[]
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
  if (athlete instanceof Error) {
    throw athlete
  }

  const hillList = await getHills({
    classification: HillClassification.Wainwright,
  })
  if (hillList instanceof Error) {
    throw hillList
  }

  const activityList = await getAthleteActivityList({
    athleteId: athlete.id,
  })
  if (activityList instanceof Error) {
    throw activityList
  }

  return superjson<LoaderData>({ athlete, hillList, activityList })
}

export default function route() {
  const { athlete, hillList, activityList } = useSuperLoaderData<LoaderData>()

  const baggedHillIds = [
    ...new Set(
      activityList.flatMap((activity) => {
        return activity.ascents.map((item) => item.hillId)
      }),
    ),
  ]

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
            <button type="submit" className="logout-button">
              Logout
            </button>
          </form>
        </div>
      </header>

      <ClientOnly>
        {() => (
          <>
            <p>Imported {activityList.length} activities from Strava.</p>
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
