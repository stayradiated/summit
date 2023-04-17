import { errorBoundarySync } from '@stayradiated/error-boundary'
import { useReducer, type Reducer, useEffect } from 'react'
import type { Activity } from './strava'
import { recordFromList } from '~/utils'

const LS_KEY = 'summit_activity'

type Store = {
  activityRecord: Record<string, Activity>
  activityIds: number[]
}

const getActivityList = (): Store | Error => {
  return errorBoundarySync<Store>(() => {
    const item = window.localStorage.getItem(LS_KEY)
    if (typeof item === 'string') {
      return JSON.parse(item)
    }

    return {
      activityRecord: {},
      activityIds: []
    }
  })
}

const setActivityList = (store: Store): void | Error => {
  return errorBoundarySync(() => {
    window.localStorage.setItem(LS_KEY, JSON.stringify(store))
  })
}

const destroyActivityList = () => {
  window.localStorage.removeItem(LS_KEY)
}

type PageState = 'DONE' | 'LOADING'

type State = {
  store: Store
  page: number
  pageRecord: Record<string, PageState>
  isLoading: boolean
}

type FetchStartAction = {
  type: 'FETCH_START'
  page: number
}

type FetchEndAction = {
  type: 'FETCH_END'
  page: number
  data: Activity[]
}

type NextPageAction = {
  type: 'NEXT_PAGE'
}

type FinishLoadingAction = {
  type: 'FINISH_LOADING'
}

type Action = FetchStartAction | FetchEndAction | NextPageAction | FinishLoadingAction

const fetchPage = async (
  pageId: number,
  perPage: number,
  signal: AbortSignal,
) => {
  const url = new URL('/api/activities', window.location.href)
  url.searchParams.set('page', String(pageId))
  url.searchParams.set('per_page', String(perPage))
  const response = await fetch(url, { signal })
  const data = (await response.json()) as Activity[]
  return data
}

const countUnseenActivities = (
  store: Store,
  incomingActivities: Activity[],
): number => {
  const incomingActivityIds = incomingActivities.map(getId)
  return incomingActivityIds.filter((activityId) => {
    return !store.activityIds.includes(activityId)
  }).length
}

const getId = (item: Activity) => item.id

const useActivityCache = () => {
  const reducer: Reducer<State, Action> = (state, action) => {
    switch (action.type) {
      case 'FETCH_START': {
        return {
          ...state,
          pageRecord: {
            ...state.pageRecord,
            [action.page]: 'LOADING',
          }
        }
      }

      case 'FETCH_END': {
        const activityIds = action.data.map(getId)
        const activityRecord = recordFromList(action.data, getId)

        return {
          ...state,
          store: {
            activityRecord: {
              ...state.store.activityRecord,
              ...activityRecord,
            },
            activityIds: [
              ...new Set([...state.store.activityIds, ...activityIds]),
            ].sort(),
          },
          pageRecord: {
            ...state.pageRecord,
            [action.page]: 'DONE',
          }
        }
      }

      case 'NEXT_PAGE': {
        return {
          ...state,
          page: state.page + 1,
        }
      }

      case 'FINISH_LOADING': {
        return {
          ...state,
          isLoading: false,
        }
      }
    }

    return state
  }

  const initialStore = getActivityList()

  const initialState: State = {
    store:
      initialStore instanceof Error
        ? {
            activityIds: [],
            activityRecord: {},
          }
        : initialStore,

    page: 1,
    pageRecord: {},
    isLoading: true,
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const controller = new AbortController()

    const pageId = state.page
    const pageState = state.pageRecord[pageId]

    if (pageState !== 'DONE') {
      dispatch({ type: 'FETCH_START', page: pageId })
      fetchPage(pageId, 30, controller.signal).then((data) => {
        dispatch({ type: 'FETCH_END', page: pageId, data })

        const unseenCount = countUnseenActivities(state.store, data)
        if (unseenCount >= 15) {
          dispatch({ type: 'NEXT_PAGE' })
        } else {
          dispatch({ type: 'FINISH_LOADING' })
        }
      })
    }

    return () => {
      controller.abort()
    }
  }, [state.page])

  useEffect(() => {
    setActivityList(state.store)
  }, [state])

  return state
}

export { getActivityList, setActivityList, useActivityCache, destroyActivityList }
