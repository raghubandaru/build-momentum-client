import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import { Header, Main } from '../shared/components'
import { Landing, Login, Register } from './components'
import Layout from '../shared/layout'

function UnAuthenticated() {
  return (
    <BrowserRouter>
      <Layout>
        <Header>
          <h1>Build Momentum</h1>
          <p>Get up and running in life with a weekly active goal</p>
        </Header>
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
