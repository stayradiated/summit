import { Wainwright } from "~/data"
import { format } from 'date-fns'

type Activity = {
  name: string
  type: string
  date: string
  wainwrightIds: number[]
}

type ActivityListProps = {
  activities: Activity[]
  wainwrightRecord: Record<string, Wainwright>
}

const ActivityList = (props: ActivityListProps) => {
  const { activities, wainwrightRecord } = props

  return (
    <div>
      <h3>History</h3>

      {activities.map((activity, index) => {
      if (activity.wainwrightIds.length <= 0) {
        return null
      }

      const date = format(new Date(activity.date), 'do LLLL yyyy')

      return (
        <div className='activity-container' key={index}>
          <h4 className='activity-title'>{activity.name}</h4>
          <p className='activity-date'>{date}</p>

          <ul>
            {activity.wainwrightIds.map((id, index) => {
              const wainwright = wainwrightRecord[id]
              return (
                <li key={index}>{wainwright.name}
                  <span className='badge'>{wainwright.area}</span>
                  <span className='badge'>{wainwright.height}</span>
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
