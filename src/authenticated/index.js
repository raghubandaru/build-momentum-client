import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import { getAccessToken } from '../shared/helpers/token'
import {
  GoalsArchive,
  Goal,
  GoalActive,
  GoalAdd,
  GoalEdit,
  TaskForm
} from './components'

function Authenticated() {
  const [activeGoal, setActiveGoal] = useState(null)

  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_DOMAIN}/goals?active=true`

    const config = {
      url,
      headers: {
        Authorization: `Bearer ${getAccessToken()}`
      }
    }

    axios(config)
      .then(({ data: { goals } }) => {
        setActiveGoal(goals[0])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (isLoading) {
    return 'Loading...'
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/tasks/create">
          <TaskForm activeGoal={activeGoal} />
        </Route>
        <Route exact path="/goals/active">
          <GoalActive activeGoal={activeGoal} setActiveGoal={setActiveGoal} />
        </Route>
        <Route exact path="/goals/archive">
          <GoalsArchive />
        </Route>
        <Route exact path="/goals/create">
          <GoalAdd setActiveGoal={setActiveGoal} />
        </Route>
        <Route exact path="/goals/edit/:id">
          <GoalEdit activeGoal={activeGoal} setActiveGoal={setActiveGoal} />
        </Route>
        <Route exact path="/goals/:goalId">
          <Goal />
        </Route>
        <Route>
          <Redirect to="/goals/active" />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Authenticated
