import type { LoaderFunction, LinksFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import leafletStyles from 'leaflet/dist/leaflet.css'
import type { Hill } from '@prisma/client'
import { superjson, useSuperLoaderData } from '~/superjson'
import { getSession } from '~/cookie.server'
import { Logo } from '~/components/logo'
import styles from '~/styles.css'
import {
  getAthlete,
  getAthleteActivityList,
  getHills,
  HillClassification,
} from '~/core'
import type { ActivityWithAscentList } from '~/core'
import { BadgeList } from '~/components/badge-list'

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

      <BadgeList hillList={hillList} baggedHillIds={baggedHillIds} />
    </div>
  )
}
