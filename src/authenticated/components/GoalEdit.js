import React from 'react'
import { useLocation } from 'react-router-dom'

import { GoalForm } from './GoalForm'

function GoalEdit() {
  const {
    state: { id, goalName, goalReview }
  } = useLocation()
  console.log('id', id)

  return (
    <GoalForm
      id={id}
      goalName={goalName}
      goalReview={goalReview}
      editMode={true}
    />
  )
}

export { GoalEdit }
