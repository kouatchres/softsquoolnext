import React from "react";
import Dialog from "@material-ui/core/dDalog";
import DialogContent from "@material-ui/core/dDalogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  actions: {
    display: "flex",
    justifyContents: "space-between",
  },
}));

const ConfirmDialog = (props) => {
  const classes = useStyles();
  const {
    isOpen = false,
    onClose = () => {},
    title = "",
    subtitle = "",
    onConfirm = () => {},
  } = props;

  const handleClose = (event) => {
    onClose(event);
  };

  return (
    <Dialog
      title={title}
      subtitle={subtitle}
      open={isOpen}
      onClose={handleClose}
    >
      <DialogContent>
        <Typography
          color="primary"
          gutterBottom
          variant="subtitle1"
          component="h6"
        >
          {title}
        </Typography>
        <Typography
          color="primary"
          gutterBottom
          variant="subtitle2"
          component="h6"
        >
          {subtitle}
        </Typography>
      </DialogContent>
      <DialogActions className={classes.actions}>
        <Button onClick={onClose}>Non</Button>
        <Button onClick={onConfirm} color="secondary">
          Oui
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
