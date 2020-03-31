import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Button } from '../../shared/elements'
import GoalDetails from './GoalDetails'
import SideContent from './SideContent'

function GoalItem({ goal: { _id, name, review, isActive }, className }) {
  return (
    <div className={className}>
      <GoalDetails name={name} review={review} />
      <SideContent>
        {isActive && (
          <Button
            rounded
            as={Link}
            to={{
              pathname: `/goals/active/edit`
            }}
          >
            Edit
          </Button>
        )}
        <Button rounded as={Link} to={`/goals/${_id}`}>
          Tasks
        </Button>
      </SideContent>
    </div>
  )
}

export default styled(GoalItem)`
  background: #d9e2ec;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 10rem;
  padding: 2rem;

  :not(:last-child) {
    margin-bottom: 1rem;
  }
`
