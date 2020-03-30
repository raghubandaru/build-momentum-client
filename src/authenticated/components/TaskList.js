import React from 'react'
import styled from 'styled-components'

import Placeholder from './Placeholder'
import TaskAction from './TaskAction'
import TaskItem from './TaskItem'

function TaskList({ className, isActive, tasks, mission }) {
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
        <TaskItem task={task} isActive={isActive} />
      ))}
    </div>
  )
}

export default styled(TaskList)`
  margin-top: 2rem;
  min-height: 36rem;
`
