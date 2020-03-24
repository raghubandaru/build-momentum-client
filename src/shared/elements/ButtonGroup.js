import styled from 'styled-components'

import { below } from '../utilities/Breakpoints'

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  ${below.small`
    flex-direction: column;
  `}
`
