type PaginatedList<Item> = {
  page: number
  items: Item[]
}

export type StravaActivity = {
  resource_state: number
  athlete: {
    id: number
    resource_state: number
  }
  name: string
  distance: number
  moving_time: number
  elapsed_time: number
  total_elevation_gain: number
  type: string
  sport_type: string
  workout_type?: number
  id: number
  start_date: string
  start_date_local: string
  timezone: string
  utc_offset: number
  location_city: any
  location_state: any
  location_country: any
  achievement_count: number
  kudos_count: number
  comment_count: number
  athlete_count: number
  photo_count: number
  map: {
    id: string
    summary_polyline: string
    resource_state: number
  }
  trainer: boolean
  commute: boolean
  manual: boolean
  private: boolean
  visibility: string
  flagged: boolean
  gear_id?: string
  start_latlng: Array<number>
  end_latlng: Array<number>
  average_speed: number
  max_speed: number
  has_heartrate: boolean
  heartrate_opt_out: boolean
  display_hide_heartrate_option: boolean
  elev_high: number
  elev_low: number
  upload_id: number
  upload_id_str: string
  external_id: string
  from_accepted_tag: boolean
  pr_count: number
  total_photo_count: number
  has_kudoed: boolean
}

const fetchActivityList = async (accessToken: string, page: number): Promise<PaginatedList<StravaActivity>> => {
  const url = new URL('https://www.strava.com/api/v3/athlete/activities')
  url.searchParams.set('access_token', accessToken)
  url.searchParams.set('per_page', '100')
  url.searchParams.set('page', '1')

  const response = await fetch(url)
  const responseJSON = await response.json() as StravaActivity[]

  return {
    page,
    items: responseJSON
  }
}

export { fetchActivityList }
