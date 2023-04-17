import { useLoaderData } from '@remix-run/react'
import type { LoaderFunction, LinksFunction } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'
import { ClientOnly } from 'remix-utils'
import { getSession, destroySessionHeaders } from '~/cookie.server'
import { ActivityList } from '~/components/activity-list'
import { Logo } from '~/components/logo'
import { WainwrightCount } from '~/components/wainwright-count'
import type { Wainwright } from '~/data'
import type { RelevantActivity } from '~/strava'
import { wainwrightRecord } from '~/data'
import styles from '~/styles.css'
import { useActivityCache } from '~/localstorage'
import { destroyActivityList } from '~/localstorage'

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }]
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

  const { store, isLoading } = useActivityCache()

  const data = store.activityIds.map((id) => store.activityRecord[id])

  const activityList = data.filter(
    (item): item is RelevantActivity => item.isRelevant,
  )
  const wainwrightList = [
    ...new Set(
      activityList.flatMap((activity) => {
        return activity.wainwrightIds
      }),
    ),
  ].map((id) => wainwrightRecord[id])

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
            <button type="submit" className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </form>
        </div>
      </header>

      {isLoading && <p className='loading-message'>
<span className="timer-loader"/>Fetching data from Strava...</p>}

      <ClientOnly>
        {() => (
          <>
            <p>Scanned {data.length} activities from Strava.</p>
            <WainwrightCount wainwrights={wainwrightList} />
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
