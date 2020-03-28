import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import { StyledHeader, Main } from '../shared/components'
import { Landing, Login, Register } from './components'
import Layout from '../shared/layout'

function UnAuthenticated() {
  return (
    <BrowserRouter>
      <Layout>
        <StyledHeader />
        <Main>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </Main>
      </Layout>
    </BrowserRouter>
  )
}

export default UnAuthenticated
