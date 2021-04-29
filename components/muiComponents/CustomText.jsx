import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "formik-material-ui";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 15,
    padding: 1,
    width: 100,
    fontSize: 15,
    fontWeight: "normal",
  },
}));

const CustomText = (props) => {
  const classes = useStyles();
  return <TextField {...props} className={classes.root} />;
};

export default CustomText;
