import React from "react";
import TextField from "@material-ui/core/TextField";
import { Field } from "formik";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
}));

const SygefexMuiInput = (props) => {
  const classes = useStyles();
  const {
    name,
    label,
    type = "text",
    variant = "outlined",
    helpertext,
  } = props;

  return (
    <Field
      as={TextField}
      name={name}
      label={label}
      fullWidth
      variant={variant}
      type={type}
      helpertext={helpertext}
      className={classes.root}
    />
  );
};

export default SygefexMuiInput;
