import React, { useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { css } from 'styled-components'
import 'styled-components/macro'

import AlertModal from '../AlertModal'
import { ErrorMessage } from '../../../shared/components'
import {
  Button,
  Checkbox,
  FormGroup,
  Label,
  Textarea
} from '../../../shared/elements'
import { getAccessToken } from '../../../shared/helpers/token'
import { isError, validateTask } from '../../../shared/utilities/validation'

function TaskForm({
  editMode,
  mission,
  taskId,
  taskCompleted,
  taskDescription
}) {
  const [description, setDescription] = useState(taskDescription)
  const [isCompleted, setCompleted] = useState(taskCompleted)
  const [showDialog, setShowDialog] = useState(false)
  const [touched, setTouched] = useState({
    description: false
  })

  const history = useHistory()

  const open = () => setShowDialog(true)

  const handleBlur = e => {
    const fieldName = e.target.name

    setTouched({ ...touched, [fieldName]: true })
  }

  const handleCheckboxChange = e => setCompleted(e.target.checked)

  const handleTaskCreate = e => {
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
      .catch(() => {})
  }

  const handleTaskEdit = e => {
    e.preventDefault()

    const url = `${process.env.REACT_APP_API_DOMAIN}/tasks/${taskId}?mission=${mission}`
    const data = { description, isCompleted }
    const config = {
      method: 'PATCH',
      url,
      headers: {
        Authorization: `Bearer ${getAccessToken()}`
      },
      data
    }

    axios(config)
      .then(() => history.push(`/goals/${mission}`))
      .catch(() => {})
  }

  const handleTaskDelete = () => {
    const url = `${process.env.REACT_APP_API_DOMAIN}/tasks/${taskId}?mission=${mission}`
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
          history.push(`/goals/${mission}`)
        }
      })
      .catch(() => {})
  }

  const errors = validateTask(description)

  return (
    <>
      <form onSubmit={editMode ? handleTaskEdit : handleTaskCreate}>
        <FormGroup>
          <Label htmlFor="description">Description</Label>
          <Textarea
            type="text"
            name="description"
            id="description"
            rows="4"
            value={description}
            onChange={e => setDescription(e.target.value)}
            onBlur={handleBlur}
            autoFocus
          />
          {errors.description && touched.description && (
            <ErrorMessage error={errors.description} />
          )}
        </FormGroup>
        {editMode && (
          <FormGroup>
            <Label>
              <Checkbox checked={isCompleted} onChange={handleCheckboxChange} />
              <span
                css={css`
                  margin-left: 0.5rem;
                `}
              >
                Completed
              </span>
            </Label>
          </FormGroup>
        )}
        <FormGroup>
          <Button disabled={isError(errors)} variant="primary">
            {editMode ? 'Edit Task' : 'Create Task'}
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
          handleDelete={handleTaskDelete}
          setShowDialog={setShowDialog}
        >
          <p>
            Are you sure you want to delete this task? This action is permanent
            and can not be undone.
          </p>
        </AlertModal>
      )}
    </>
  )
}

TaskForm.defaultProps = {
  taskCompleted: false,
  taskDescription: ''
}

TaskForm.propTypes = {
  editMode: PropTypes.bool,
  mission: PropTypes.string.isRequired,
  taskId: PropTypes.string,
  taskCompleted: PropTypes.bool,
  taskDescription: PropTypes.string
}

export { TaskForm }
