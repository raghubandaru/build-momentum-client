import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import {
  Button,
  FormGroup,
  Input,
  Label,
  Textarea
} from '../../shared/elements'
import { getAccessToken } from '../../shared/helpers/token'

function GoalForm({
  goalId,
  goalName = '',
  goalReview = '',
  editMode = false,
  setActiveGoal
}) {
  const [name, setName] = useState(goalName)
  const [review, setReview] = useState(goalReview)

  const history = useHistory()

  const handleGoalCreate = e => {
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
      .then(({ data: { goal } }) => {
        setActiveGoal(goal)
        history.push('/goals/active')
      })
      .catch(error => console.log(error))
  }

  const handleGoalEdit = e => {
    e.preventDefault()

    const url = `${process.env.REACT_APP_API_DOMAIN}/goals/${goalId}`
    const data = { name, review }
    const config = {
      method: 'PATCH',
      url,
      headers: {
        Authorization: `Bearer ${getAccessToken()}`
      },
      data
    }

    axios(config)
      .then(({ data: { goal } }) => {
        setActiveGoal(goal)
        history.push('/goals/active')
      })
      .catch(error => console.log(error))
  }

  const handleGoalDelete = e => {
    e.preventDefault()

    const url = `${process.env.REACT_APP_API_DOMAIN}/goals/${goalId}`
    const config = {
      method: 'DELETE',
      url,
      headers: {
        Authorization: `Bearer ${getAccessToken()}`
      }
    }

    axios(config)
      .then(({ data: { ok } }) => {
        if (ok) {
          setActiveGoal(null)
        }
      })
      .catch(error => console.log(error))
  }

  return (
    <form onSubmit={editMode ? handleGoalEdit : handleGoalCreate}>
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
      {editMode && (
        <FormGroup>
          <Label htmlFor="review">Goal Review</Label>
          <Textarea
            name="review"
            id="review"
            rows="4"
            value={review}
            onChange={e => setReview(e.target.value)}
          />
        </FormGroup>
      )}
      <FormGroup>
        <Button primary>{editMode ? 'Edit Goal' : 'Create Goal'}</Button>
      </FormGroup>
      {editMode && (
        <FormGroup>
          <Button secondary onClick={handleGoalDelete}>
            Delete
          </Button>
        </FormGroup>
      )}
    </form>
  )
}

export { GoalForm }
