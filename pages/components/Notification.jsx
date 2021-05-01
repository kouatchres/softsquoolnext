import React from "react";
import Alert from "@material-ui/lab/alert";
import Snackbar from "@material-ui/core/snackbar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    top: theme.spacing(10),
  },
}));
function Notification(props) {
  const classes = useStyles();
  const { notify, setNotify } = props;

  const handleClose = (e, reason) => {
    if (reason === "clikaway") {
      return;
    }
    setNotify((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div>
      <Snackbar
        className={classes.root}
        open={notify.isOpen}
        onClose={handleClose}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity={notify.type} onClose={handleClose}>
          {notify.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Notification;
