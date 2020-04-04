import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

import { GoalForm } from './GoalForm'
import { StyledHeader, Main } from '../../shared/components'

function GoalEdit({ activeGoal, setActiveGoal }) {
  if (!activeGoal) {
    return <Redirect to="/goals/active" />
  }

  const { _id: goalId, name, review } = activeGoal

  return (
    <>
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
    </>
  )
}

GoalEdit.propTypes = {
  activeGoal: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    review: PropTypes.string
  }),
  setActiveGoal: PropTypes.func.isRequired
}

export { GoalEdit }
