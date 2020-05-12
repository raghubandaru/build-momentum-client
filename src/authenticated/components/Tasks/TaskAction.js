import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Button } from '../../../shared/elements'

function TaskAction({ className, isActive, pathname }) {
  if (!isActive) {
    return null
  }

  return (
    <div className={className}>
      <Button
        variant="primary"
        as={Link}
        to={{
          pathname
        }}
      >
        New Task
      </Button>
    </div>
  )
}

TaskAction.propTypes = {
  className: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  pathname: PropTypes.string.isRequired
}

export default styled(TaskAction)`
  text-align: right;
  margin-bottom: 2rem;
`
