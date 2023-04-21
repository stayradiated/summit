import { format } from 'date-fns'
import type { Hill } from '@prisma/client'
import type { ActivityWithAscentList } from '~/core'

type ActivityListProps = {
  activities: ActivityWithAscentList[]
  hillRecord: Record<string, Hill>
}

const ActivityList = (props: ActivityListProps) => {
  const { activities, hillRecord } = props

  return (
    <div>
      <h3>History</h3>

      {activities
        .sort((a, b) => {
          return (
            new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
          )
        })
        .map((activity, index) => {
          if (activity.ascents.length <= 0) {
            return null
          }

          const date = format(new Date(activity.startDate), 'do LLLL yyyy')

          return (
            <div className="activity-container" key={index}>
              <h4 className="activity-title">{activity.name}</h4>
              <p className="activity-date">{date}</p>

              <ul>
                {activity.ascents
                  .sort((a, b) => {
                    return a.index - b.index
                  })
                  .map((ascent, index) => {
                    const hill = hillRecord[ascent.hillId]
                    return (
                      <li key={index}>
                        {hill.name}
                        <span className="badge">{hill.area}</span>
                        <span className="badge">Height {hill.height}m</span>
                        <span className="badge">
                          Distance {Math.round(ascent.distance * 1000)}m
                        </span>
                      </li>
                    )
                  })}
              </ul>
            </div>
          )
        })}
    </div>
  )
}

export { ActivityList }
