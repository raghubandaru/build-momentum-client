import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Button } from '../../shared/elements'
import TaskStatus from './TaskStatus'

function TaskItem({
  task: { _id: taskId, description, isCompleted },
  isActive,
  className
}) {
  return (
    <div className={className}>
      <p>{description}</p>
      <div>
        <TaskStatus isCompleted={isCompleted} isActive={isActive} />
        {isActive && (
          <Button rounded as={Link} to={`/tasks/edit/${taskId}`}>
            Edit
          </Button>
        )}
      </div>
    </div>
  )
}

export default styled(TaskItem)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  min-height: 10rem;
  background: #d9e2ec;
  :not(:last-child) {
    margin-bottom: 1rem;
  }

  p {
    flex-basis: 65%;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
`
