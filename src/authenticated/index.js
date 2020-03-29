import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import { Goals, Goal, GoalAdd, GoalEdit, TaskForm } from './components'

function Authenticated() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/tasks/create">
          <TaskForm />
        </Route>
        <Route exact path="/goals/create">
          <GoalAdd />
        </Route>
        <Route exact path="/goals/edit/:id">
          <GoalEdit />
        </Route>
        <Route exact path="/goals/:goalId">
          <Goal />
        </Route>
        <Route exact path="/goals">
          <Goals />
        </Route>
        <Route>
          <Redirect to="/goals?active=true" />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Authenticated
