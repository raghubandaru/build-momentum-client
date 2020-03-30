import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Layout from '../../shared/layout'
import { StyledHeader, Main } from '../../shared/components'
import { getAccessToken } from '../../shared/helpers/token'
import GoalList from './GoalList'
import Pagination from './Pagination'

function GoalsArchive() {
  const [isLoading, setLoading] = useState(true)
  const [goals, setGoals] = useState([])
  const [goalPage, setGoalPage] = useState(1)
  const [hasPrevious, setHasPrevious] = useState(false)
  const [hasNext, setHasNext] = useState(false)

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_DOMAIN}/goals?active=false&page=${goalPage}`

    const config = {
      url,
      headers: {
        Authorization: `Bearer ${getAccessToken()}`
      }
    }

    axios(config)
      .then(({ data: { goals, hasPrevious, hasNext } }) => {
        setGoals(goals)
        setHasPrevious(hasPrevious)
        setHasNext(hasNext)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [goalPage])

  const handlePreviousPage = () => {
    setGoalPage(goalPage => goalPage - 1)
  }

  const handleNextPage = () => {
    setGoalPage(goalPage => goalPage + 1)
  }

  if (isLoading) {
    return 'Loading...'
  }

  const title = 'Archived Goals'
  const quote = 'Goals from the past'

  return (
    <Layout>
      <StyledHeader title={title} quote={quote} />
      <Main>
        <GoalList goals={goals} />
        <Pagination
          hasPrevious={hasPrevious}
          hasNext={hasNext}
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
        />
      </Main>
    </Layout>
  )
}

export { GoalsArchive }
