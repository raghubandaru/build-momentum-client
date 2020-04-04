import styled from 'styled-components'

import { below } from '../../shared/utilities/Breakpoints'

const ActionGroup = styled.div`
  display: flex;
  & > * {
    margin-left: 1rem;
  }

  ${below.small`
    justify-content: space-between;
    margin-top: 1rem;
    width: 100%;
    
    & > * {
      margin-left: 0;
    }
  `}
`

export default ActionGroup
