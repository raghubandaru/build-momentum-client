import React from 'react'

import { GoalForm } from './GoalForm'
import Layout from '../../shared/layout'
import { StyledHeader, Main } from '../../shared/components'

function GoalAdd({ setActiveGoal }) {
  return (
    <Layout>
      <StyledHeader title="Get Started" quote="What's planned for this week?" />
      <Main>
        <GoalForm setActiveGoal={setActiveGoal} />
      </Main>
    </Layout>
  )
}

export { GoalAdd }
