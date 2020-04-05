import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

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
  width: ${(props) => props.width && `${props.width}%`};

  &:focus {
    box-shadow: 0 0 0 3px rgba(118, 169, 250, 0.45);
    outline: none;
  }

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}

  ${(props) =>
    props.variant === 'brand' &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.variant === 'primary' &&
    css`
      background: #0a6c74;
      color: #f0f4f8;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
    `}

  ${(props) =>
    props.variant === 'remove' &&
    css`
      background: #a61b1b;
      color: #f0f4f8;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
    `}

  ${(props) =>
    props.variant === 'rounded' &&
    css`
      border-radius: 100px;
      border: 2px solid #0a6c74;
      font-size: 1.1rem;
      font-weight: 600;
      letter-spacing: 1px;
      padding: 0.5rem 1rem;
      text-transform: uppercase;
    `}

  ${(props) =>
    props.variant === 'secondary' &&
    css`
      border: 2px solid #0a6c74;
    `}
`

Button.propTypes = {
  variant: PropTypes.oneOf([
    'brand',
    'primary',
    'remove',
    'rounded',
    'secondary',
  ]),
}
