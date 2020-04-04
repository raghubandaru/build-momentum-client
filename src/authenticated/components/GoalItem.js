import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import ActionGroup from './ActionGroup'
import { Button } from '../../shared/elements'
import { below } from '../../shared/utilities/Breakpoints'
import GoalDetails from './GoalDetails'

function GoalItem({ className, goal: { _id, isActive, name, review } }) {
  return (
    <div className={className}>
      <GoalDetails name={name} review={review} />
      <ActionGroup>
        {isActive && (
          <Button
            variant="rounded"
            as={Link}
            to={{
              pathname: `/goals/active/edit`
            }}
          >
            Edit
          </Button>
        )}
        <Button variant="rounded" as={Link} to={`/goals/${_id}`}>
          Tasks
        </Button>
      </ActionGroup>
    </div>
  )
}

GoalItem.propTypes = {
  className: PropTypes.string.isRequired,
  goal: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    review: PropTypes.string
  })
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

  ${below.small`
    flex-direction: column;
  `}
`
