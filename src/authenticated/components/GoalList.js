import React from 'react'
import styled from 'styled-components'

import Placeholder from './Placeholder'
import GoalItem from './GoalItem'

function GoalList({ className, goals, active }) {
  const action = active ? 'Get Started' : 'Active Goal'
  const pathname = active ? '/goals/create' : '/goals?active=true'
  const text = active
    ? "Get up and running with this week's goal"
    : 'No Goals activity from the past.'

  if (goals.length === 0) {
    return <Placeholder action={action} pathname={pathname} text={text} />
  }

  return (
    <div className={className}>
      {goals.map(goal => (
        <GoalItem goal={goal} />
      ))}
    </div>
  )
}

export default styled(GoalList)`
  min-height: 36rem;
`
