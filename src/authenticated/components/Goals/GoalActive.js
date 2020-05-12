import React from 'react'
import PropTypes from 'prop-types'

import { StyledHeader, Main } from '../../../shared/components'
import GoalItem from './GoalItem'
import Placeholder from '../Placeholder'
import DialogUpload from '../DialogUpload'

function GoalActive({ activeGoal, newRegister, setNewRegister }) {
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
      <StyledHeader title={title} quote={quote} />
      <Main>
        {activeGoal ? (
          <GoalItem goal={activeGoal} />
        ) : (
          <Placeholder action={action} pathname={pathname} text={text} />
        )}
      </Main>
      <DialogUpload isOpen={newRegister} close={close} />
    </div>
  )
}

GoalActive.propTypes = {
  activeGoal: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    review: PropTypes.string
  }),
  newRegister: PropTypes.bool.isRequired,
  setNewRegister: PropTypes.func.isRequired
}

export { GoalActive }
