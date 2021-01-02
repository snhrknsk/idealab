import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';

import TemplatePage from '../base/templatePage'
import URLs from './../../common/config';

const useStyles = makeStyles((theme) => ({
root: {
  height: '85vh',
},
paper: {
  margin: theme.spacing(8, 4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
},
avatar: {
  margin: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main,
},
form: {
  width: '100%', // Fix IE 11 issue.
  marginTop: theme.spacing(1),
},
submit: {
  margin: theme.spacing(3, 0, 2),
},
component: {
  margin: theme.spacing(1)
}
}));
  
export default function SignInPage() {
    const classes = useStyles();
    const [value, setValue] = React.useState('female');
    return (
      <TemplatePage>
        <Grid container justify="center" className={classes.root}>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form className={classes.form} noValidate>
              <TextField variant="outlined" margin="normal" required fullWidth id="username" label="ユーザー名" name="username" autoFocus/>
              <TextField variant="outlined" margin="normal" required fullWidth id="email" label="Email" name="email" autoComplete="email"/>
              <TextField variant="outlined" margin="normal" fullWidth id="company" label="所属企業/学校" name="company"/>
              <TextField variant="outlined" margin="normal" required fullWidth name="password" label="パスワード" type="password" id="password" autoComplete="current-password"/>
              <TextField variant="outlined" margin="normal" required fullWidth name="validatepassword" label="パスワード(確認)" type="password" id="password" autoComplete="current-password"/>
              <div className={classes.component}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Grade</FormLabel>
                <RadioGroup row aria-label="grade" name="grade" defaultValue="無料">
                  <FormControlLabel value="無料" control={<Radio color="primary" />} label="無料"/>
                  <FormControlLabel value="premium1" control={<Radio color="primary" />} label="Premium1"/>
                  <FormControlLabel value="premium2" control={<Radio color="primary" />} label="premium2"/>
                </RadioGroup>
              </FormControl>
              </div>
              <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                登録
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href={URLs.signin} variant="body2">
                    既に登録済みの方はこちら
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </TemplatePage>
    )
}