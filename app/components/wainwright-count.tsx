import type { Wainwright } from '~/data'
import { wainwrightList } from '~/data'

type WainwrightCountProps = {
  wainwrights: Wainwright[]
}

const WainwrightCount = (props: WainwrightCountProps) => {
  const { wainwrights: baggedWainwrightList } = props

  const percentage =
    Math.round((baggedWainwrightList.length / wainwrightList.length) * 1000) /
    10

  return (
    <div>
      <h3>Progress</h3>
      You have bagged{' '}
      <strong>
        {baggedWainwrightList.length} out of {wainwrightList.length} Wainwrights
      </strong>
      ! That is {percentage}%!
      <div className="progress-bar">
        <div
          className="progress-bar-inner"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

export { WainwrightCount }
