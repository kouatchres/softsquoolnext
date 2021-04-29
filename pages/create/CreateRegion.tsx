import React from 'react';
import NewRegion from '../../components/region/NewRegion';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pageStyled: {
      margin: 'auto',
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(1),
      maxWidth: '30%',
      minWidth: '10rem'
    }
  })
);
const createRegion = () => {
  const classes = useStyles();

  return <NewRegion />;
};

export default createRegion;
