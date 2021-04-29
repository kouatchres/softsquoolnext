import React from "react"
import NewUser from "../../components/user/NewUser"
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // // display: "grid",
      // // placeItems: "center",
      padding: theme.spacing(1),
      maxWidth: "30%",
      minWidth: "25%",
      margin: "auto",
    },

  }))

const createUser = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NewUser />

    </div>
  )
};

export default createUser;
