import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'

import { StyledHeader, Main } from '../shared/components'
import { Landing, Login, Register } from './components'
import Layout from '../shared/layout'

function UnAuthenticated({ setNewRegister }) {
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
              <Register setNewRegister={setNewRegister} />
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

UnAuthenticated.propTypes = {
  setNewRegister: PropTypes.func.isRequired
}

export default UnAuthenticated
