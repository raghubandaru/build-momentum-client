import React from 'react'

import { GoalForm } from './GoalForm'

function GoalEdit({ activeGoal, setActiveGoal }) {
  const { _id, name, review } = activeGoal

  return (
    <GoalForm
      id={_id}
      goalName={name}
      goalReview={review}
      setActiveGoal={setActiveGoal}
      editMode={true}
    />
  )
}

export { GoalEdit }
