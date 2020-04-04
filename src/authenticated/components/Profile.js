import React from 'react'

import { StyledHeader, Main } from '../../shared/components'
import Avatar from './Avatar'

function Profile({ className }) {
  return (
    <>
      <StyledHeader title="Profile" quote="Access the information provided" />
      <Main>
        <Avatar />
      </Main>
    </>
  )
}

export { Profile }
