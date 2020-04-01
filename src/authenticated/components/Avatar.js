import React, { useState } from 'react'
import styled from 'styled-components'

import DialogModal from './DialogModal'
import { useUser } from '../../shared/context/User'
import { Button } from '../../shared/elements'
import UserInfo from './UserInfo'

function Avatar({ className }) {
  const [avatarEdit, setAvatarEdit] = useState(false)

  const { user } = useUser()

  const close = () => setAvatarEdit(false)

  return (
    <div className={className}>
      {user.avatar && (
        <div className="image-content">
          <img
            src={`http://res.cloudinary.com/raghubandaru/image/upload/v${user.avatar}`}
            alt="Avatar"
          />
        </div>
      )}
      <UserInfo />
      <Button secondary onClick={() => setAvatarEdit(true)}>
        {user.avatar ? 'Change Avatar' : 'Add Avatar'}
      </Button>
      <DialogModal isOpen={avatarEdit} close={close} />
    </div>
  )
}

export default styled(Avatar)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .image-content {
    width: 200px;
    height: 200px;
    margin-bottom: 2rem;
    border-radius: 50%;

    img {
      width: 100%;
      border-radius: 50%;
    }
  }
`