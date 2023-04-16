import { Wainwright } from "~/data"
import { format } from 'date-fns'

type Activity = {
  name: string
  type: string
  date: string
  wainwrights: Wainwright[]
}

type ActivityListProps = {
  activities: Activity[]
}

const ActivityList = (props: ActivityListProps) => {
  const { activities } = props

  return (
    <div>
      <h3>History</h3>

      {activities.map((activity) => {
      if (activity.wainwrights.length <= 0) {
        return null
      }

      const date = format(new Date(activity.date), 'do LLLL yyyy')

      return (
        <div className='activity-container'>
          <h4 className='activity-title'>{activity.name}</h4>
          <p className='activity-date'>{date}</p>

          <ul>
            {activity.wainwrights.map((wainwright) => (
              <li>{wainwright.name}
              <span className='badge'>{wainwright.area}</span>
              <span className='badge'>{wainwright.height}</span></li>
            ))}
          </ul>
        </div>
      )
      })}
    </div>
  )
}

export { ActivityList }
