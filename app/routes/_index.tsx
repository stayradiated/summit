import { json, redirect } from '@remix-run/node'
import type { LoaderFunction, LinksFunction } from '@remix-run/node'
import { LandingPage } from '~/components/landing-page'
import { getSession } from '~/cookie.server'
import styles from '~/styles.css'

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }]
}

type LoaderData = Record<string, unknown>

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request)
  if (!session.isValid) {
    return json<LoaderData>({})
  }

  return redirect('/activities')
}

export default function Index() {
  return <LandingPage />
}
