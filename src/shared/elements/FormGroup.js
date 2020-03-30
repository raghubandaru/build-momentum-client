import styled, { css } from 'styled-components'

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  ${props =>
    props.checked &&
    css`
      flex-direction: row;
      align-items: baseline;
    `}
`
