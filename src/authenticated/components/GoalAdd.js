import React from 'react'

import { GoalForm } from './GoalForm'
import { StyledHeader, Main } from '../../shared/components'

function GoalAdd({ setActiveGoal }) {
  return (
    <>
      <StyledHeader title="Get Started" quote="What's planned for this week?" />
      <Main>
        <GoalForm setActiveGoal={setActiveGoal} />
      </Main>
    </>
  )
}

export { GoalAdd }
