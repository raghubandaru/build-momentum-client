import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Button } from '../../shared/elements'

function PlaceHolder({ className, text, action, pathname, mission }) {
  return (
    <div className={className}>
      <p>{text}</p>
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
        {action}
      </Button>
    </div>
  )
}

export default styled(PlaceHolder)`
  min-height: 13rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    margin-bottom: 2rem;
  }
`
