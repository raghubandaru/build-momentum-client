import React from 'react'

import { GoalForm } from './GoalForm'

function GoalAdd({ setActiveGoal }) {
  return <GoalForm setActiveGoal={setActiveGoal} />
}

export { GoalAdd }
