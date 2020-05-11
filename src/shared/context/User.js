import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import PropTypes from 'prop-types'

import { fetchAccessToken, fetchUser } from '../api'
import { Loading } from '../components'
import { setAccessToken } from '../helpers/token'

const UserContext = createContext()

function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isLoading, setLoading] = useState(true)

  const fetchAccessTokenAndUser = useCallback(async () => {
    try {
      const {
        data: { accessToken }
      } = await fetchAccessToken()
      const {
        data: { user }
      } = await fetchUser(accessToken)

      setAccessToken(accessToken)
      setUser(user)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchAccessTokenAndUser()
  }, [fetchAccessTokenAndUser])

  if (isLoading) {
    return <Loading variant="fullheight" />
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

const useUser = () => useContext(UserContext)

UserProvider.propTypes = {
  children: PropTypes.element
}

export { UserProvider, UserContext, useUser }
