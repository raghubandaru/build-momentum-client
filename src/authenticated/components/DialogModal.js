import React from 'react'
import { Dialog, DialogContent } from '@reach/dialog'
import VisuallyHidden from '@reach/visually-hidden'
import '@reach/dialog/styles.css'

import { Upload } from './Upload'
import styled from 'styled-components'

function DialogModal({ newRegister, close, className }) {
  return (
    <Dialog className={className} isOpen={newRegister} onDismiss={close}>
      <button className="close-button" onClick={close}>
        <VisuallyHidden>Close</VisuallyHidden>
        <span aria-hidden>×</span>
      </button>
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
