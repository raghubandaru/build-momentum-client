import React, { useState, useEffect } from 'react'
import axios from 'axios'
import debounce from 'lodash.debounce'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

import {
  Container,
  DialogMenu,
  Nav,
  WrapperBody,
  WrapperHead
} from '../components'
import { getAccessToken, setAccessToken } from '../helpers/token'
import { useUser } from '../context/User'
import { Button } from '../elements'
import { below } from '../utilities/Breakpoints'

function Layout({ children, className }) {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)

  const { user, setUser } = useUser()

  const close = () => setMenuOpen(false)

  const handleResize = e => {
    setInnerWidth(e.target.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', debounce(handleResize, 300))

    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
    <div className={className}>
      <WrapperHead>
        <Container>
          <Nav>
            <Button variant="brand" as={Link} to="/">
              BM
            </Button>
            {user ? (
              innerWidth > 400 ? (
                <div className="pullright">
                  <Button
                    as={NavLink}
                    activeClassName="activeClassName"
                    to="/goals/active"
                  >
                    Home
                  </Button>
                  <Button
                    as={NavLink}
                    activeClassName="activeClassName"
                    to="/goals/archive"
                  >
                    Archive
                  </Button>
                  <Button
                    as={NavLink}
                    activeClassName="activeClassName"
                    to="/profile"
                  >
                    Profile
                  </Button>
                  <Button onClick={handleLogout}>Logout</Button>
                </div>
              ) : (
                <Button onClick={() => setMenuOpen(true)}>Menu</Button>
              )
            ) : (
              <div>
                <Button
                  as={NavLink}
                  activeClassName="activeClassName"
                  to="/login"
                >
                  Login
                </Button>
              </div>
            )}
          </Nav>
        </Container>
      </WrapperHead>
      <WrapperBody>
        <Container>{children}</Container>
      </WrapperBody>
      <DialogMenu
        isOpen={isMenuOpen}
        close={close}
        handleLogout={handleLogout}
      />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  className: PropTypes.string.isRequired
}

export default styled(Layout)`
  .activeClassName {
    font-weight: 600;
  }

  .pullright {
    & > * {
      margin-left: 2rem;

      ${below.med`
        margin-left: 1rem;
      `}
    }
  }
`
