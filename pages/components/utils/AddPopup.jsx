import React from 'react'
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core'


const AddPopup = (props) => {
  const {
    isOpen = false,
    onClose = () => {},
    title = '',
    children,
    ...rest
  } = props

  const handleClose = (event) => {
    onClose(event)
  }

  return (
    <Dialog onClose={handleClose} open={isOpen} maxWidth={"sm"} >
      <DialogContent>{children}</DialogContent>
    </Dialog>
  )
}

export default AddPopup

