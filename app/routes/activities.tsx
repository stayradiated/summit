import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction, LinksFunction } from "@remix-run/node"
import { json, redirect } from "@remix-run/node"
import useSWRInfinite from 'swr/infinite'
import { useEffect } from "react";

import { getSession, destroySessionHeaders } from "~/cookie.server"
import { ActivityList } from '~/components/activity-list'
import { Logo } from '~/components/logo'
import { WainwrightCount } from "~/components/wainwright-count"
import type { Wainwright } from "~/data"
import { wainwrightRecord } from "~/data"

import styles from '~/styles.css'

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
}

type LoaderData = {
  athlete: {
    username: string,
    firstName: string,
    lastName: string,
  },
  wainwrightRecord: Record<string, Wainwright>
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

  return json({ athlete, wainwrightRecord })
}

const getKey = (pageIndex: number, previousPageData: unknown[]) => {
  if (previousPageData && !previousPageData.length) return null
  return `/api/activities?page=${pageIndex+1}`
}

const fetcher = async (url: string) => {
  const response = await fetch(url)
  return response.json()
}

export default function route () {
  const { athlete, wainwrightRecord } = useLoaderData<LoaderData>()

  const swr = useSWRInfinite(getKey, fetcher, {
    parallel: true,
    initialSize: 10,
  })
  const { isLoading, data, size, setSize } = swr
  const isLoadingMore = (data??[]).length < size

  const handleLoadMore = () => {
    setSize(size + 10)
  }

  const activityList = (data??[]).flatMap((list) => {
    return list.filter(Boolean)
  })
  const wainwrightList = [...new Set(activityList.flatMap((activity) => {
    return activity.wainwrightIds
  }))].map((id) => wainwrightRecord[id])

  return (
    <div>
      <header className='header'>
        <div className='logo-container-small'>
          <Logo />
          <h1 className='app-title'>Summit</h1>
        </div>

        <div className='session'>
          <span>Logged in as {athlete.firstName} {athlete.lastName}.</span>
          <form action="/logout" method="post" className='logout-form'>
            <button type="submit" className="logout-button">
              Logout
            </button>
          </form>
        </div>
      </header>

  {
  isLoading
  ? (<p>Fetching data from Strava, please wait...</p>)
  : (
  <>
      <p>Fetched {(data??[]).flat().length} activities from Strava.
        <button onClick={handleLoadMore} disabled={isLoadingMore}>
        { isLoadingMore ? 'Loading...' : 'Fetch More' }
        </button>
      </p>

      <WainwrightCount wainwrights={wainwrightList} />
      <ActivityList activities={activityList} wainwrightRecord={wainwrightRecord} />
      </>
      )}
    </div>
  )
}

