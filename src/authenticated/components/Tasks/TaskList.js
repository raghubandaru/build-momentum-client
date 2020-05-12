import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Placeholder from '../Placeholder'
import TaskAction from './TaskAction'
import TaskItem from './TaskItem'

function TaskList({ className, isActive, mission, tasks }) {
  const action = isActive ? 'Create Task' : 'Archive Goals'
  const pathname = isActive ? '/tasks/create' : '/goals/archive'
  const text = isActive
    ? 'Get up and running with the first task'
    : 'No task registered when this goal was active'

  if (tasks.length === 0) {
    return (
      <Placeholder
        action={action}
        pathname={pathname}
        mission={mission}
        text={text}
      />
    )
  }

  return (
    <div className={className}>
      <TaskAction isActive={isActive} pathname={pathname} mission={mission} />
      {tasks.map(task => (
        <TaskItem key={task._id} task={task} isActive={isActive} />
      ))}
    </div>
  )
}

TaskList.propTypes = {
  className: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  mission: PropTypes.string.isRequired,
  tasks: PropTypes.array
}

export default styled(TaskList)`
  margin-top: 2rem;
  min-height: 36rem;
`
