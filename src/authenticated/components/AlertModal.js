import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  AlertDialog,
  AlertDialogLabel,
  AlertDialogDescription
} from '@reach/alert-dialog'
import '@reach/dialog/styles.css'

import { below } from '../../shared/utilities/Breakpoints'
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
          Cancel
        </Button>{' '}
        <Button
          variant="remove"
          onClick={() => {
            handleDelete()
            close()
          }}
        >
          Delete
        </Button>
      </ButtonGroup>
    </AlertDialog>
  )
}

AlertModal.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  handleDelete: PropTypes.func.isRequired,
  setShowDialog: PropTypes.func.isRequired
}

export default styled(AlertModal)`
  div:not(:last-child) {
    margin-bottom: 3rem;
  }

  &[data-reach-dialog-content] {
    background: #f0f4f8;
    padding: 5rem;
    width: 60vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  ${below.med`
    &[data-reach-dialog-content] {
      width: 80vw;
      padding: 5rem 3rem;
    }
  `}

  ${below.small`
    &[data-reach-dialog-content] {
      width: 90vw;
      padding: 5rem 2rem;
    }

    ${Button} {
      width: 100%;
    }
  `}
`
