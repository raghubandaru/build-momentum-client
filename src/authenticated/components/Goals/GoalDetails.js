import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function GoalDetails({ className, name, review }) {
  return (
    <div className={className}>
      <h2>{name}</h2>
      <p>{review}</p>
    </div>
  )
}

const StyledGoalDetails = styled(GoalDetails)`
  display: flex;
  flex-direction: column;
  h2 {
    margin-bottom: 1rem;
  }
  p {
    font-style: italic;
  }
`

GoalDetails.defaultProps = {
  review: 'No review available'
}

GoalDetails.propTypes = {
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  review: PropTypes.string
}

export default StyledGoalDetails
