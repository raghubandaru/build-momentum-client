import React from 'react'
import styled from 'styled-components'

import Placeholder from './Placeholder'
import GoalItem from './GoalItem'

function GoalList({ className, goals }) {
  const action = 'Go Active'
  const pathname = '/goals/active'
  const text = 'No Goals activity from the past.'

  if (goals.length === 0) {
    return <Placeholder action={action} pathname={pathname} text={text} />
  }

  return (
    <div className={className}>
      {goals.map(goal => (
        <GoalItem key={goal._id} goal={goal} />
      ))}
    </div>
  )
}

export default styled(GoalList)`
  min-height: 36rem;
`
