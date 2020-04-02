import React from 'react'
import styled from 'styled-components'
import { Dialog, DialogContent } from '@reach/dialog'
import VisuallyHidden from '@reach/visually-hidden'
import '@reach/dialog/styles.css'

import { below } from '../../shared/utilities/Breakpoints'
import { Button } from '../../shared/elements'
import { Upload } from './Upload'

function DialogModal({ isOpen, close, className }) {
  return (
    <Dialog className={className} isOpen={isOpen} onDismiss={close}>
      <Button className="close-button" onClick={close}>
        <VisuallyHidden>Close</VisuallyHidden>
        <span aria-hidden>X</span>
      </Button>
      <DialogContent>
        <Upload close={close} />
      </DialogContent>
    </Dialog>
  )
}

export default styled(DialogModal)`
  &[data-reach-dialog-content] {
    background: #f0f4f8;
    width: 60vw;
  }

  [data-reach-dialog-content] {
    background: #f0f4f8;
    margin: 5rem auto;
    width: 100%;
  }

  ${below.med`
    &[data-reach-dialog-content] {
      width: 90vw;
    }
  `}

  ${below.small`
    &[data-reach-dialog-content] {
      width: 90vw;
    }

    [data-reach-dialog-content] {
      padding: 0;
    }
  `}
`
