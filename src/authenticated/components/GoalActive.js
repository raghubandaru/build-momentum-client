import React from 'react'

import Layout from '../../shared/layout'
import { StyledHeader, Main } from '../../shared/components'
import GoalItem from './GoalItem'
import Placeholder from './Placeholder'
import DialogUpload from './DialogUpload'

function GoalActive({ activeGoal, className, newRegister, setNewRegister }) {
  const action = 'Get Started'
  const pathname = '/goals/create'
  const quote = 'Goal of the week'
  const text = "Get up and running with this week's goal"
  const title = 'Active Goal'

  const close = () => {
    setNewRegister(false)
  }

  return (
    <div>
      <Layout>
        <StyledHeader title={title} quote={quote} />
        <Main>
          {activeGoal ? (
            <GoalItem goal={activeGoal} />
          ) : (
            <Placeholder action={action} pathname={pathname} text={text} />
          )}
        </Main>
      </Layout>
      <DialogUpload isOpen={newRegister} close={close} />
    </div>
  )
}

export { GoalActive }
