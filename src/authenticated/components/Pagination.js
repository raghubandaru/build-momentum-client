import React from 'react'
import styled from 'styled-components'

import { Button } from '../../shared/elements'

function Pagination({
  className,
  hasPrevious,
  hasNext,
  handlePreviousPage,
  handleNextPage
}) {
  if (!hasPrevious && !hasNext) {
    return null
  }

  return (
    <div className={className}>
      {hasPrevious && (
        <Button onClick={() => handlePreviousPage()}>{'<- Previous'}</Button>
      )}
      {hasNext && <Button onClick={() => handleNextPage()}>Next -></Button>}
    </div>
  )
}

export default styled(Pagination)`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`
