import React, { useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import AlertModal from './AlertModal'
import { ErrorMessage } from '../../shared/components'
import {
  Button,
  FormGroup,
  Input,
  Label,
  Textarea
} from '../../shared/elements'
import { getAccessToken } from '../../shared/helpers/token'
import { isError, validateGoal } from '../../shared/utilities/validation'

function GoalForm({ goalId, goalName, goalReview, editMode, setActiveGoal }) {
  const [name, setName] = useState(goalName)
  const [review, setReview] = useState(goalReview)
  const [showDialog, setShowDialog] = useState(false)
  const [touched, setTouched] = useState({
    name: false
  })

  const history = useHistory()

  const open = () => setShowDialog(true)

  const handleChange = e => {
    const fieldName = e.target.name
    const value = e.target.value

    if (fieldName === 'name') {
      setName(value)
    } else if (fieldName === 'review') {
      setReview(value)
    }
  }

  const handleBlur = e => {
    const fieldName = e.target.name

    setTouched({ ...touched, [fieldName]: true })
  }

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
      .catch(() => {})
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
      .catch(() => {})
  }

  const handleGoalDelete = () => {
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
      .catch(() => {})
  }

  const errors = validateGoal(name)

  return (
    <>
      <form onSubmit={editMode ? handleGoalEdit : handleGoalCreate}>
        <FormGroup>
          <Label htmlFor="name">Goal Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
            onBlur={handleBlur}
            autoFocus
          />
          {errors.name && touched.name && <ErrorMessage error={errors.name} />}
        </FormGroup>
        {editMode && (
          <FormGroup>
            <Label htmlFor="review">Goal Review</Label>
            <Textarea
              name="review"
              id="review"
              rows="4"
              value={review}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormGroup>
        )}
        <FormGroup>
          <Button disabled={isError(errors)} variant="primary">
            {editMode ? 'Edit Goal' : 'Create Goal'}
          </Button>
        </FormGroup>
      </form>
      {editMode && (
        <FormGroup>
          <Button variant="secondary" onClick={open}>
            Delete
          </Button>
        </FormGroup>
      )}
      {showDialog && (
        <AlertModal
          handleDelete={handleGoalDelete}
          setShowDialog={setShowDialog}
        >
          <p>
            Are you sure you want to delete this Goal? Deleting this goal inturn
            deletes all the associated tasks. This action is permanent and can
            not be undone.
          </p>
        </AlertModal>
      )}
    </>
  )
}

GoalForm.defaultProps = {
  goalName: '',
  goalReview: '',
  editMode: false
}

GoalForm.propTypes = {
  goalId: PropTypes.string,
  goalName: PropTypes.string,
  goalReview: PropTypes.string,
  editMode: PropTypes.bool,
  setActiveGoal: PropTypes.func.isRequired
}

export { GoalForm }
