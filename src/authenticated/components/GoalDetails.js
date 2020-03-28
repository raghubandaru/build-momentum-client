import React from 'react'
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

export default StyledGoalDetails
