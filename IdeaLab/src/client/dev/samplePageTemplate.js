import React from 'react';
import TemplatePage from '../pages/base/templatePage';
import { makeStyles } from '@material-ui/core/styles';

export default function sample() {
  const classes = useStyles();
  return (
    <TemplatePage>

    </TemplatePage>
  );
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  maincss: {
    margin: theme.spacing(2,2),
  },
  title: {
    margin: theme.spacing(3,2,0),
  },
  icon: {
    margin: theme.spacing(0, 1),
    fontSize: "medium",
  }
}));