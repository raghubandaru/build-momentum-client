import styled from 'styled-components'

import { below } from '../utilities/Breakpoints'

export const Main = styled.main`
  padding: 6rem;
  margin-bottom: 2rem;
  width: 100%;
  background: #f0f4f8;

  ${below.med`
    padding: 3rem;
  `}

  ${below.small`
    padding: 3rem 1.5rem;
  `}
`
