import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import {
  Button,
  FormGroup,
  Input,
  Label,
  ButtonGroup
} from '../../shared/elements'
import { setAccessToken } from '../../shared/helpers/token'
import { useUser } from '../../shared/context/User'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setUser } = useUser()

  const handleSignUp = e => {
    e.preventDefault()
    const url = `${process.env.REACT_APP_API_DOMAIN}/users`
    const data = { name, email, password }
    const config = {
      method: 'POST',
      url,
      data,
      withCredentials: true
    }

    axios(config).then(({ data: { user, accessToken } }) => {
      setAccessToken(accessToken)
      setUser(user)
    })
  }

  return (
    <form onSubmit={handleSignUp}>
      <FormGroup>
        <Label htmlFor="name">Name</Label>
        <Input
          type="name"
          name="name"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Button primary>Register</Button>
      </FormGroup>
      <ButtonGroup>
        <Button as={Link} to="/login">
          Already Registered? Login here
        </Button>
      </ButtonGroup>
    </form>
  )
}

export { Register }
