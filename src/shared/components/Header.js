import React from 'react'
import styled from 'styled-components'

function Header({
  className,
  title = 'Build Momentum',
  quote = 'Get up and running with a weekly active goal'
}) {
  return (
    <header className={className}>
      <h1>{title}</h1>
      <p>{quote}</p>
    </header>
  )
}

export const StyledHeader = styled(Header)`
  text-align: center;
  margin: 4rem 0 2rem 0;

  h1 {
    margin-bottom: 5px;
  }

  p {
    font-style: italic;
  }
`
