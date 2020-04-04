import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Button } from '../../shared/elements'

function PlaceHolder({ action, className, mission, pathname, text }) {
  return (
    <div className={className}>
      <p>{text}</p>
      <Button
        variant="primary"
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

PlaceHolder.propTypes = {
  action: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  mission: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
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
