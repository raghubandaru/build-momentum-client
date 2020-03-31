import React from 'react'
import { Redirect } from 'react-router-dom'

import { GoalForm } from './GoalForm'
import Layout from '../../shared/layout'
import { StyledHeader, Main } from '../../shared/components'

function GoalEdit({ activeGoal, setActiveGoal }) {
  if (!activeGoal) {
    return <Redirect to="/goals/active" />
  }

  const { _id: goalId, name, review } = activeGoal

  return (
    <Layout>
      <StyledHeader
        title="Edit Goal"
        quote="Hopefully review time or change details that fit your needs"
      />
      <Main>
        <GoalForm
          goalId={goalId}
          goalName={name}
          goalReview={review}
          setActiveGoal={setActiveGoal}
          editMode={true}
        />
      </Main>
    </Layout>
  )
}

export { GoalEdit }
