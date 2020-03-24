import styled, { css } from 'styled-components'

export const Button = styled.button`
  background: none;
  border: none;
  color: #0A6c74;
  cursor: pointer;
  font-family: inherit;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: inherit;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  width: ${props => props.width && `${props.width}px`};

  ${props =>
    props.fullwidth &&
    css`
      width: 100%;
    `}

  ${props =>
    props.primary &&
    css`
      background: #0a6c74;
      color: #f0f4f8;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 2px;
    `}

  ${props =>
    props.secondary &&
    css`
      border: 2px solid #0a6c74;
    `}

  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`
