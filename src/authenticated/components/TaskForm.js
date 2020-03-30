import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import {
  Button,
  FormGroup,
  Textarea,
  Label,
  Input
} from '../../shared/elements'
import { getAccessToken } from '../../shared/helpers/token'

function TaskForm({
  editMode,
  mission,
  taskId,
  taskDescription = '',
  taskCompleted = false
}) {
  const [description, setDescription] = useState(taskDescription)
  const [isCompleted, setCompleted] = useState(taskCompleted)

  const history = useHistory()

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

  return (
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
  )
}

export { TaskForm }
