import { decode as decodePolyline } from '@mapbox/polyline'
import { wainwrightList, wainwrightRecord, Wainwright } from "~/data"
import { newLineString, newPoint, pointInsideLakeDistrict, distanceFromLine } from '~/turf.server'
import { errorBoundary } from '@stayradiated/error-boundary'
import z from 'zod'
import { mapOrExclude, EXCLUDE } from './map-or-exclude'

const $StravaActivity = z.object({
    resource_state: z.number(),
    athlete: z.object({ id: z.number(), resource_state: z.number() }),
    name: z.string(),
    distance: z.number(),
    moving_time: z.number(),
    elapsed_time: z.number(),
    total_elevation_gain: z.number(),
    type: z.string(),
    sport_type: z.string(),
    workout_type: z.number().nullable().optional(),
    id: z.number(),
    start_date: z.string(),
    start_date_local: z.string(),
    timezone: z.string(),
    utc_offset: z.number(),
    location_city: z.null(),
    location_state: z.null(),
    location_country: z.null(),
    achievement_count: z.number(),
    kudos_count: z.number(),
    comment_count: z.number(),
    athlete_count: z.number(),
    photo_count: z.number(),
    map: z.object({
      id: z.string(),
      summary_polyline: z.string(),
      resource_state: z.number(),
    }),
    trainer: z.boolean(),
    commute: z.boolean(),
    manual: z.boolean(),
    private: z.boolean(),
    visibility: z.string(),
    flagged: z.boolean(),
    gear_id: z.string().nullable(),
    start_latlng: z.array(z.number()),
    end_latlng: z.array(z.number()),
    average_speed: z.number(),
    max_speed: z.number(),
    has_heartrate: z.boolean(),
    heartrate_opt_out: z.boolean(),
    display_hide_heartrate_option: z.boolean(),
    elev_high: z.number().optional(),
    elev_low: z.number().optional(),
    upload_id: z.number().nullable(),
    upload_id_str: z.string().optional(),
    external_id: z.string().nullable(),
    from_accepted_tag: z.boolean(),
    pr_count: z.number(),
    total_photo_count: z.number(),
    has_kudoed: z.boolean(),
  })
type StravaActivity = z.infer<typeof $StravaActivity>

const $StravaActivityResponse = z.union([
    z.object({
      message: z.string(),
      errors: z.array(z.object({ resource: z.string(), field: z.string(), code: z.string() })),
    }),
    z.array($StravaActivity)
])

type FetchActivityListPageOptions = {
  accessToken: string,
  perPage: number
  page: number
  before?: number
}

const fetchActivityListPage = (options: FetchActivityListPageOptions): Promise<StravaActivity[]|Error> => {
  const { accessToken, perPage, page, before } = options

  const url = new URL('https://www.strava.com/api/v3/athlete/activities')
  url.searchParams.set('access_token', accessToken)
  url.searchParams.set('per_page', String(perPage))
  url.searchParams.set('page', String(page))
  if (typeof before === 'number') {
    url.searchParams.set('before', String(before))
  }

  console.log(`Fetching page #${page} (per_page=${perPage}, before=${before})`)
  console.log(url.toString())

  return errorBoundary(async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    const result = $StravaActivityResponse.parse(responseJSON)
    if ('errors' in result) {
      throw new Error(result.message)
    }
    return result
  })
}

type FetchActivityListOptions = {
  accessToken: string,
  perPage: number
  before?: number
}

async function* createActivityListStream (options: FetchActivityListOptions) {
  const { accessToken, perPage, before } = options
  let page = 1
  let index = 0
  while (true) {
    const items = await fetchActivityListPage({ accessToken, perPage, page, before })
    if (items instanceof Error) {
      throw items
    }
    for (const item of items) {
      yield { ...item, index }
      index += 1
    }
    if (items.length <= 0) {
      break
    }
    page += 1
  }
}

const isActivityInLakeDistrict = (activity: StravaActivity): boolean => {
  const startPoint = activity.start_latlng.length >= 2 ? newPoint(activity.start_latlng): undefined
  if (startPoint && pointInsideLakeDistrict(startPoint)) {
    return true
  }

  const endPoint = activity.end_latlng.length >= 2 ? newPoint(activity.end_latlng) : undefined
  if (endPoint && pointInsideLakeDistrict(endPoint)) {
    return true
  }

  return false
}

type Activity = {
  name: string
  type: string
  date: string
  wainwrightIds: number[]
}

const processActivity = (activity: StravaActivity): Activity|undefined=> {
  if (!isActivityInLakeDistrict(activity)) {
    return undefined
  }

  const activityTrack = newLineString(decodePolyline(activity.map.summary_polyline))

  const wainwrightIds = mapOrExclude(wainwrightList, (wainwright) => {
    const distance = distanceFromLine(activityTrack, newPoint(wainwright.coords))

    if (distance > 0.05) {
      return EXCLUDE
    }

    return wainwright.id
  })

  return { name: activity.name, type: activity.type, date: activity.start_date, wainwrightIds }
}

export { fetchActivityListPage, createActivityListStream, processActivity }
export type { Activity }
