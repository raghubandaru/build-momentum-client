import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { SpringSpinner } from 'react-epic-spinners'

function Loading({ className }) {
  return (
    <div className={className}>
      <SpringSpinner size={100} color="#0A6C74" />
    </div>
  )
}

const StyledLoading = styled(Loading)`
  width: 100%;
  height: ${props => props.height}px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d9e2ec;

  ${props =>
    props.variant === 'fullheight' &&
    css`
      height: 100vh;
    `}

  ${props =>
    props.variant === 'insidelayout' &&
    css`
      height: calc(100vh - 6rem);
    `}
`

Loading.propTypes = {
  className: PropTypes.string.isRequired,
  height: PropTypes.number,
  variant: PropTypes.oneOf(['fullheight', 'insidelayout'])
}

export { StyledLoading as Loading }
