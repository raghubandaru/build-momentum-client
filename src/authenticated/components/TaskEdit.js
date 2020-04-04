import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import { StyledHeader, Main } from '../../shared/components'
import { getAccessToken } from '../../shared/helpers/token'
import { TaskForm } from './TaskForm'

function TaskEdit({ activeGoal }) {
  const [isLoading, setLoading] = useState(true)
  const [task, setTask] = useState(null)
  const { _id: mission } = activeGoal

  const { taskId } = useParams()

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_DOMAIN}/tasks/${taskId}?mission=${mission}`
    const config = {
      url,
      headers: {
        Authorization: `Bearer ${getAccessToken()}`
      }
    }

    axios(config)
      .then(({ data: { task } }) => {
        setTask(task)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [taskId, mission])

  if (isLoading) {
    return 'Loading...'
  }

  return (
    <>
      <StyledHeader title="Edit Task" quote="Hopefully you made the progress" />
      <Main>
        <TaskForm
          editMode={true}
          mission={mission}
          taskId={task._id}
          taskDescription={task.description}
          taskCompleted={task.isCompleted}
        />
      </Main>
    </>
  )
}

export { TaskEdit }
