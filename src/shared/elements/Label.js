import styled from 'styled-components'

export const Label = styled.label`
  color: #243b53;
  font-size: 1.4rem;
  margin-bottom: 4px;

  ${props =>
    props.checked &&
    `
    margin-left: 2rem;
    margin-top: 0.25rem;
  `}
`
