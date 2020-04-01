import styled, { css } from 'styled-components'

export const Button = styled.button`
  background: none;
  border: none;
  color: #0A6c74;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.5rem;
  line-height: inherit;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  width: ${props => props.width && `${props.width}%`};

  ${props =>
    props.primary &&
    css`
      background: #0a6c74;
      color: #f0f4f8;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
    `}

  ${props =>
    props.secondary &&
    css`
      border: 2px solid #0a6c74;
    `}
  
  ${props =>
    props.rounded &&
    css`
      border-radius: 100px;
      border: 2px solid #0a6c74;
      font-size: 1.1rem;
      font-weight: 600;
      letter-spacing: 1px;
      padding: 0.5rem 1rem;
      text-transform: uppercase;
    `}

  ${props =>
    props.fullwidth &&
    css`
      width: 100%;
    `}

  ${props =>
    props.brand &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}

  ${props =>
    props.delete &&
    css`
      background: #a61b1b;
    `}
`
