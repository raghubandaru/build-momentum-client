import React from 'react'
import styled from 'styled-components'
import { Dialog, DialogContent } from '@reach/dialog'
import VisuallyHidden from '@reach/visually-hidden'
import '@reach/dialog/styles.css'

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
  [data-reach-dialog-content] {
    width: 100%;
    margin: 2rem 0;
  }
`
