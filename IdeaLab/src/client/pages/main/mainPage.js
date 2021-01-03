import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

import IdeaList from './contents/ideaListPage'
import AuthPanel from './contents/authPage'
import TemplatePanel from './contents/ideatemplatePage'
import TemplatePage from '../base/templatePage'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '90vh',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 350,
  },
  container: {
    margin: theme.spacing(2,2,2),
    // paddingTop: theme.spacing(4),
    // paddingBottom: theme.spacing(4),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));
const fixedHeightPaper = clsx(useStyles.paper, useStyles.fixedHeight);

export default function MainPage () {
  return(
    <TemplatePage>
      {/* <div className={useStyles.container}></div> */}
      <Container maxWidth="xl" className={useStyles.container} >
        <Grid container spacing={3} >
          {/* Idea Template */}
          <Grid item xs={12} md={9} lg={9}>
            <Paper className={useStyles.paper}>
              <Grid container component="main" className={useStyles.root}>
                <TemplatePanel />
              </Grid>
              <Grid container component="main" className={useStyles.root}>
                <IdeaList />
              </Grid>
            </Paper>
          </Grid>
          <Divider className={useStyles.divider} />
          {/* SignIn */}
          <Grid item xs={12} md={3} lg={3}>
            <Paper className={useStyles.paper}>
              <Grid container component="main" className={useStyles.root}>
                <AuthPanel />
              </Grid>
            </Paper>
          </Grid>
          {/* <Grid item xs={12}>
            <Paper className={useStyles().paper}>
              <IdeaList />
            </Paper>
          </Grid> */}
        </Grid>
      </Container>
    </TemplatePage>
  )
}
