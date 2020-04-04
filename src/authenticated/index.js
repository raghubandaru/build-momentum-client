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
  Profile,
  TaskAdd,
  TaskEdit
} from './components'
import Layout from '../shared/layout'

function Authenticated({ newRegister, setNewRegister }) {
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
      <Layout>
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/tasks/create">
            <TaskAdd activeGoal={activeGoal} />
          </Route>
          <Route path="/tasks/edit/:taskId">
            <TaskEdit activeGoal={activeGoal} />
          </Route>
          <Route exact path="/goals/create">
            <GoalAdd setActiveGoal={setActiveGoal} />
          </Route>
          <Route exact path="/goals/active/edit">
            <GoalEdit activeGoal={activeGoal} setActiveGoal={setActiveGoal} />
          </Route>
          <Route exact path="/goals/active">
            <GoalActive
              activeGoal={activeGoal}
              setActiveGoal={setActiveGoal}
              newRegister={newRegister}
              setNewRegister={setNewRegister}
            />
          </Route>
          <Route exact path="/goals/archive">
            <GoalsArchive />
          </Route>
          <Route exact path="/goals/:goalId">
            <Goal />
          </Route>
          <Route>
            <Redirect to="/goals/active" />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default Authenticated
