import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "theme.spacing(0.5)",
    minWidth: 0,
  },
  secondary: {
    backgroundColor: "theme.palette.secondary.light",
    "& MuiButton-labl": {
      color: "theme.palette.secondary.main",
    },
  primary: {
    backgroundColor: "theme.palette.primry.light",
    "& MuiButton-labl": {
      color: "theme.palette.primary.main",
    },
  },
}));

const ActionButton = (props) => {
 const    classes= useStyles()
  const { color, children, onClick } = props;
  return (<Button onClick={onClick}className={`${classes[color]} ${classes.root}`}>{children} </Button>)
};

export default ActionButton;
