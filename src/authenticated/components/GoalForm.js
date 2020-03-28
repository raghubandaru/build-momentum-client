import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import Layout from '../../shared/layout'
import { StyledHeader, Main } from '../../shared/components'
import { Button, FormGroup, Input, Label } from '../../shared/elements'
import { getAccessToken } from '../../shared/helpers/token'

function GoalForm() {
  const [name, setName] = useState('')

  const history = useHistory()

  const handleGoalCreation = e => {
    e.preventDefault()
    const url = `${process.env.REACT_APP_API_DOMAIN}/goals`
    const data = { name }
    const config = {
      method: 'POST',
      url,
      headers: {
        Authorization: `Bearer ${getAccessToken()}`
      },
      data
    }
    axios(config)
      .then(() => history.push('/goals?active=true'))
      .catch(error => console.log(error))
  }

  return (
    <Layout>
      <StyledHeader title="Get Started" quote="What's planned for this week?" />
      <Main>
        <form onSubmit={handleGoalCreation}>
          <FormGroup>
            <Label htmlFor="name">Goal Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              autoFocus
            />
          </FormGroup>
          <FormGroup>
            <Button primary>Create Goal</Button>
          </FormGroup>
        </form>
      </Main>
    </Layout>
  )
}

export { GoalForm }
