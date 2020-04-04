import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Button } from '../../shared/elements'

function Pagination({
  className,
  hasNext,
  handleNextPage,
  hasPrevious,
  handlePreviousPage
}) {
  if (!hasPrevious && !hasNext) {
    return null
  }

  return (
    <div className={className}>
      {hasPrevious && (
        <Button onClick={handlePreviousPage}>{'<- Previous'}</Button>
      )}
      {hasNext && <Button onClick={handleNextPage}>Next -></Button>}
    </div>
  )
}

Pagination.propTypes = {
  className: PropTypes.string.isRequired,
  hasNext: PropTypes.bool.isRequired,
  handleNextPage: PropTypes.func.isRequired,
  hasPrevious: PropTypes.bool.isRequired,
  handlePreviousPage: PropTypes.func.isRequired
}

export default styled(Pagination)`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`
