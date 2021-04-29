import React from "react";
import { Paper, Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fdf66f",
    marginTop: theme.spacing(9),
  },
  pageHeader: {
    padding: theme.spacing(2),
    display: "flex",
    marginBottom: theme.spacing(4),
    // marginTop: theme.spacing(10),
  },
  pageTitle: {
    paddingLeft: theme.spacing(2),
  },
}));

const PageHeader = (props) => {
  const classes = useStyles();
  const { icon, title, subTitle } = props;
  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.pageHeader}>
        <Card>{icon}</Card>
        <div className={classes.pageTitle}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subTitle2" component="div">
            {subTitle}
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default PageHeader;
