import React from 'react'

import Layout from '../../shared/layout'
import { StyledHeader, Main } from '../../shared/components'
import { TaskForm } from './TaskForm'

function TaskAdd({ activeGoal }) {
  const { _id: mission } = activeGoal

  return (
    <Layout>
      <StyledHeader
        title="New Task"
        quote="Add task that helps you achieve this week's goal"
      />
      <Main>
        <TaskForm mission={mission} />
      </Main>
    </Layout>
  )
}

export { TaskAdd }
