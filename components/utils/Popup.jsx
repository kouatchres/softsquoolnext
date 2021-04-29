import React from "react";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";

const Popup = (props) => {
  const { openPopup, setOpenPopup, title, children } = props;

  return (
    <Dialog open={openPopup} setOpenPopup={setOpenPopup}>
      <DialogTitle>
        <div>title goes here</div>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
export default Popup;
