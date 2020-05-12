import React from 'react'
import PropTypes from 'prop-types'

import { StyledHeader, Main } from '../../../shared/components'
import { TaskForm } from './TaskForm'

function TaskAdd({ activeGoal }) {
  const { _id: mission } = activeGoal

  return (
    <>
      <StyledHeader
        title="New Task"
        quote="Add task that helps you achieve this week's goal"
      />
      <Main>
        <TaskForm mission={mission} />
      </Main>
    </>
  )
}

TaskAdd.propTypes = {
  activeGoal: PropTypes.shape({
    _id: PropTypes.string.isRequired
  })
}

export { TaskAdd }
