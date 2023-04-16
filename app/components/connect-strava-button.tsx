const OAUTH_AUTHORIZE_URL = 'https://www.strava.com/oauth/authorize'

const getStravaAuthUrl = () => {
  const hostName = `${window.location.protocol}//${window.location.host}`
  console.log({ hostName})

  const url = new URL(OAUTH_AUTHORIZE_URL)
  url.searchParams.set('client_id', '41535')
  url.searchParams.set('redirect_uri', `${hostName}/auth/strava`)
  url.searchParams.set('response_type', 'code')
  url.searchParams.set('scope', 'activity:read')
  const urlString = url.toString()

  return urlString
}

const ConnectStravaButton = () => {
  const url = getStravaAuthUrl()

  return (
    <a href={url} className='connect-strava-button'>Connect with Strava</a>
  )
}

export { ConnectStravaButton }
