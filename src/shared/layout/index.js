import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { Container, Nav, WrapperBody, WrapperHead } from '../components'
import { getAccessToken, setAccessToken } from '../helpers/token'
import { useUser } from '../context/User'
import { Button } from '../elements'

function Layout({ children }) {
  const { user, setUser } = useUser()

  const handleLogout = () => {
    const config = {
      method: 'POST',
      url: `${process.env.REACT_APP_API_DOMAIN}/users/logout`,
      headers: {
        Authorization: `Bearer ${getAccessToken()}`
      },
      withCredentials: true
    }

    axios(config).then(() => {
      setAccessToken('')
      setUser(null)
    })
  }

  return (
    <div>
      <WrapperHead>
        <Container>
          <Nav>
            <Button as={Link} to="/">
              BM
            </Button>
            {user ? (
              <Button onClick={handleLogout}>Logout</Button>
            ) : (
              <Button as={Link} to="/login">
                Login
              </Button>
            )}
          </Nav>
        </Container>
      </WrapperHead>
      <WrapperBody>
        <Container>{children}</Container>
      </WrapperBody>
    </div>
  )
}

export default Layout
