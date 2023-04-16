import { json, redirect } from '@remix-run/node'
import type { LoaderFunction, LinksFunction } from '@remix-run/node'
import { LandingPage } from '~/components/landing-page';

import { getSession } from '~/cookie.server';

import styles from '~/styles.css'

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
}

type LoaderData = {}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request)
  console.log(session.data)

  if (!session.has('accessToken')) {
    return json<LoaderData>({})
  }

  return redirect('/activities')
}

export default function Index() {
  return <LandingPage />
}
