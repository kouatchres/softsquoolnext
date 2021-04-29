import React from "react";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";

const UpdatePopup = (props) => {
  const {
    isOpen = false,
    onClose = () => {},
    title = "",
    children,
    ...rest
  } = props;

  const handleClose = (event) => {
    onClose(event);
  };

  return (
    <Dialog title={title} onClose={handleClose} open={isOpen} maxWidth = {'sm'} >
      <DialogTitle>
        <div>{title}</div>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default UpdatePopup;

