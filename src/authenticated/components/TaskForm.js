import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import AlertModal from './AlertModal'
import { getAccessToken } from '../../shared/helpers/token'
import {
  Button,
  FormGroup,
  Label,
  Input,
  Textarea
} from '../../shared/elements'

function TaskForm({
  editMode,
  mission,
  taskId,
  taskDescription = '',
  taskCompleted = false
}) {
  const [description, setDescription] = useState(taskDescription)
  const [isCompleted, setCompleted] = useState(taskCompleted)
  const [showDialog, setShowDialog] = useState(false)

  const history = useHistory()

  const open = () => setShowDialog(true)

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
      .catch(error => console.log(error))
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
      .catch(error => console.log(error))
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
      .catch(error => console.log(error))
  }

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
            autoFocus
          />
        </FormGroup>
        {editMode && (
          <FormGroup checked={true}>
            <Input
              type="checkbox"
              name="isCompleted"
              id="isCompleted"
              checked={isCompleted}
              onChange={e => setCompleted(e.target.checked)}
            />
            <Label htmlFor="isCompleted">Completed</Label>
          </FormGroup>
        )}
        <FormGroup>
          <Button primary>{editMode ? 'Edit Task' : 'Create Task'}</Button>
        </FormGroup>
      </form>
      {editMode && (
        <FormGroup>
          <Button secondary onClick={open}>
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

export { TaskForm }
