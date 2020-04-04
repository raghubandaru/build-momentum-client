import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import { StyledHeader, Main } from '../../shared/components'
import { getAccessToken } from '../../shared/helpers/token'

import Pagination from './Pagination'
import TaskList from './TaskList'

function Goal() {
  const [isLoading, setLoading] = useState(true)
  const [goal, setGoal] = useState(null)
  const [tasks, setTasks] = useState(null)
  const [taskPage, setTaskPage] = useState(1)
  const [hasPrevious, setHasPrevious] = useState(false)
  const [hasNext, setHasNext] = useState(false)

  const { goalId } = useParams()

  useEffect(() => {
    const url1 = `${process.env.REACT_APP_API_DOMAIN}/goals/${goalId}`

    const config1 = {
      url: url1,
      headers: {
        Authorization: `Bearer ${getAccessToken()}`
      }
    }

    axios(config1)
      .then(({ data: { goal } }) => {
        setGoal(goal)
      })
      .catch(() => setLoading(false))
  }, [goalId])

  useEffect(() => {
    const url2 = `${process.env.REACT_APP_API_DOMAIN}/tasks?mission=${goalId}&page=${taskPage}`

    const config = {
      url: url2,
      headers: {
        Authorization: `Bearer ${getAccessToken()}`
      }
    }

    axios(config)
      .then(({ data: { tasks, hasPrevious, hasNext } }) => {
        setTasks(tasks)
        setHasPrevious(hasPrevious)
        setHasNext(hasNext)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [goalId, taskPage])

  const handlePreviousPage = () => {
    setTaskPage(taskPage => taskPage - 1)
  }

  const handleNextPage = () => {
    setTaskPage(taskPage => taskPage + 1)
  }

  if (isLoading) {
    return 'Loading...'
  }

  if (goal === null || tasks === null) {
    return 'Loading...'
  }

  const title = goal.name
  const quote = goal.review

  return (
    <>
      <StyledHeader title={title} quote={quote} />
      <Main>
        <TaskList tasks={tasks} isActive={goal.isActive} mission={goal._id} />
        <Pagination
          hasPrevious={hasPrevious}
          hasNext={hasNext}
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
        />
      </Main>
    </>
  )
}

export { Goal }
