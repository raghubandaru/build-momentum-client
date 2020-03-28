import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Button } from '../../shared/elements'

function TaskAction({ className, isActive, pathname, mission }) {
  if (!isActive) {
    return null
  }

  return (
    <div className={className}>
      <Button
        primary
        as={Link}
        to={{
          pathname,
          state: {
            mission
          }
        }}
      >
        New Task
      </Button>
    </div>
  )
}

export default styled(TaskAction)`
  text-align: right;
  margin-bottom: 2rem;
`
