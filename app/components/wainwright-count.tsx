type WainwrightCountProps = {
  baggedHillIds: number[]
  totalHillCount: number
}

const WainwrightCount = (props: WainwrightCountProps) => {
  const { baggedHillIds, totalHillCount } = props

  const percentage =
    Math.round((baggedHillIds.length / totalHillCount) * 1000) / 10

  return (
    <div>
      <h3>Progress</h3>
      You have bagged{' '}
      <strong>
        {baggedHillIds.length} out of {totalHillCount} Wainwrights
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
