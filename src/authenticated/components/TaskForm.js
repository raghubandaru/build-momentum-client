import React, { useState } from 'react'
import axios from 'axios'
import { useHistory, useLocation } from 'react-router-dom'

import Layout from '../../shared/layout'
import { StyledHeader, Main } from '../../shared/components'
import { Button, FormGroup, Textarea, Label } from '../../shared/elements'
import { getAccessToken } from '../../shared/helpers/token'

function TaskForm() {
  const [description, setDescription] = useState('')

  const history = useHistory()
  const {
    state: { mission }
  } = useLocation()

  const handleTaskCreation = e => {
    e.preventDefault()
    const url = `${process.env.REACT_APP_API_DOMAIN}/tasks?mission=${mission}`
    const data = { description }
    const config = {
      method: 'POST',
      url,
      headers: {
        Authorization: `Bearer ${getAccessToken()}`
      },
      data
    }
    axios(config)
      .then(() => history.push(`/goals/${mission}`))
      .catch(error => console.log(error))
  }

  return (
    <Layout>
      <StyledHeader
        title="Task Form"
        quote="Add task that helps you achieve this week's goal"
      />
      <Main>
        <form onSubmit={handleTaskCreation}>
          <FormGroup>
            <Label htmlFor="description">Description</Label>
            <Textarea
              type="text"
              name="description"
              id="description"
              rows="4"
              value={description}
              onChange={e => setDescription(e.target.value)}
              autoFocus
            />
          </FormGroup>
          <FormGroup>
            <Button primary>Create Task</Button>
          </FormGroup>
        </form>
      </Main>
    </Layout>
  )
}

export { TaskForm }
