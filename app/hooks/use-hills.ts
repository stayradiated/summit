import { useActivityCache } from '~/localstorage'

const useHills = () => {
  const { store, isLoading } = useActivityCache()

  console.log(store)

  const fullActivityList = store.activityIds.map(
    (id) => store.activityRecord[id],
  )

  const activityList = fullActivityList.filter(
    (item) => item.ascents.length > 0,
  )

  const baggedHillIds = [
    ...new Set(
      activityList.flatMap((activity) => {
        return activity.ascents.map((item) => item.hillId)
      }),
    ),
  ]

  return {
    isLoading,
    fullActivityList,
    activityList,
    baggedHillIds,
  }
}

export { useHills }
