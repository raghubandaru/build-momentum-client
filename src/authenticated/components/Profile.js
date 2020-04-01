import React from 'react'

import Layout from '../../shared/layout'
import { StyledHeader, Main } from '../../shared/components'
import Avatar from './Avatar'

function Profile({ className }) {
  return (
    <Layout>
      <StyledHeader title="Profile" quote="Access the information provided" />
      <Main>
        <Avatar />
      </Main>
    </Layout>
  )
}

export { Profile }
