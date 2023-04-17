import type { LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { getSession, setSessionHeaders } from '~/cookie.server'
import { STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET } from '~/env.server'

const OAUTH_TOKEN_URL = 'https://www.strava.com/api/v3/oauth/token'

type LoaderData = {
  errorMessage: string
}

type ErrorResponse = {
  message: string
  errors: Array<{
    resource: string
    field: string
    code: string
  }>
}

type ValidResponse = {
  token_type: string
  expires_at: number
  expires_in: number
  refresh_token: string
  access_token: string
  athlete: {
    id: number
    username: string
    resource_state: number
    firstname: string
    lastname: string
    bio: any
    city: any
    state: any
    country: any
    sex: any
    premium: boolean
    summit: boolean
    created_at: string
    updated_at: string
    badge_type_id: number
    weight: number
    profile_medium: string
    profile: string
    friend: any
    follower: any
  }
}

const hasErrors = (data: unknown): data is ErrorResponse => {
  return (
    data !== null &&
    typeof data === 'object' &&
    'messsage' in data &&
    'errors' in data
  )
}

const isValidResponse = (data: unknown): data is ValidResponse => {
  return (
    data !== null &&
    typeof data === 'object' &&
    'access_token' in data &&
    'refresh_token' in data &&
    'expires_at' in data
  )
}

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')

  const response = await fetch(OAUTH_TOKEN_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      client_id: STRAVA_CLIENT_ID,
      client_secret: STRAVA_CLIENT_SECRET,
      code,
      grant_type: 'authorization_code',
    }),
  })

  const responseJson = (await response.json()) as unknown

  if (hasErrors(responseJson)) {
    return { errorMessage: responseJson.message }
  }

  if (!isValidResponse(responseJson)) {
    return { errorMessage: 'Invalid response received' }
  }

  const session = await getSession(request)
  session.set('accessToken', responseJson.access_token)
  session.set('expiresAt', responseJson.expires_at)
  session.set('athlete', {
    username: responseJson.athlete.username,
    firstName: responseJson.athlete.firstname,
    lastName: responseJson.athlete.lastname,
  })

  return redirect('/', {
    headers: await setSessionHeaders(session),
  })
}

export default function route() {
  const { errorMessage } = useLoaderData<LoaderData>()

  return <h1>⚠️ {errorMessage} ⚠️</h1>
}
