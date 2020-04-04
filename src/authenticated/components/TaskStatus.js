import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function TaskStatus({ className, isActive, isCompleted }) {
  return (
    <div className={className}>
      <span>
        {isCompleted ? 'finished' : isActive ? 'progress' : 'Unfinished'}
      </span>
    </div>
  )
}

TaskStatus.propTypes = {
  className: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  isCompleted: PropTypes.bool.isRequired
}

export default styled(TaskStatus)`
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  border-radius: 100px;
  background: ${props =>
    props.isCompleted ? '#98aeeb' : props.isActive ? '#87eaf2' : '#f29b9b'};

  span {
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${props =>
      props.isCompleted ? '#19216c' : props.isActive ? '#044e54' : '#610404'};
  }
`
