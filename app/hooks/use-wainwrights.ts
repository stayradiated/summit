import { useActivityCache } from '~/localstorage'
import type { RelevantActivity } from '~/strava'

const useWainwrights = () => {
  const { store, isLoading } = useActivityCache()

  const fullActivityList = store.activityIds.map(
    (id) => store.activityRecord[id],
  )

  const activityList = fullActivityList.filter(
    (item): item is RelevantActivity => item.isRelevant,
  )

  const baggedWainwrightIds = [
    ...new Set(
      activityList.flatMap((activity) => {
        return activity.wainwrightIds
      }),
    ),
  ]

  return {
    isLoading,
    fullActivityList,
    activityList,
    baggedWainwrightIds,
  }
}

export { useWainwrights }
