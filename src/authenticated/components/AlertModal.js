import React from 'react'
import styled from 'styled-components'
import {
  AlertDialog,
  AlertDialogLabel,
  AlertDialogDescription
} from '@reach/alert-dialog'
import '@reach/dialog/styles.css'

import { Button, ButtonGroup } from '../../shared/elements'

function AlertModal({ className, children, handleDelete, setShowDialog }) {
  const cancelRef = React.useRef()
  const close = () => setShowDialog(false)

  return (
    <AlertDialog leastDestructiveRef={cancelRef} className={className}>
      <AlertDialogLabel>
        <h2>Please Confirm!</h2>
      </AlertDialogLabel>
      <AlertDialogDescription>{children}</AlertDialogDescription>
      <ButtonGroup>
        <Button ref={cancelRef} onClick={close}>
          Nevermind, don't delete.
        </Button>{' '}
        <Button
          primary
          delete
          onClick={() => {
            handleDelete()
            close()
          }}
        >
          Yes, delete
        </Button>
      </ButtonGroup>
    </AlertDialog>
  )
}

export default styled(AlertModal)`
  background: #f0f4f8;
  display: flex;
  flex-direction: column;
  align-items: center;

  [data-reach-alert-dialog-description] {
    text-align: center;
  }

  & > * {
    margin-bottom: 2rem;
  }
`
