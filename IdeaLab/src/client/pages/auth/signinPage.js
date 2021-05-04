import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import Icon from '@material-ui/core/Icon';

import TemplatePage from '../base/templatePage'
import URLs from './../../common/config';

export default function SignInPage() {
  const classes = useStyles();
  return (
    <TemplatePage>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
            
              <h3 className={classes.mailauth}>メールアドレスでログイン</h3>
              <TextField variant="standard" margin="none" required fullWidth
                id="email" label="Email" name="email"
                autoComplete="email" autoFocus />
              <TextField variant="standard" margin="normal" required fullWidth
                name="password" label="パスワード" type="password" id="password" autoComplete="current-password" />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="ブラウザに保存する"
              />
              <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  {/*<Link href={URLs.signin} variant="body2">
                    Forgot password?
                  </Link>*/}
                </Grid>
                <Grid item>
                  <Link href={URLs.signup} variant="body2">
                    新規登録
                  </Link>
                </Grid>
              </Grid>
              <h3 className={classes.authtopbutton}>ソーシャルアカウントでログイン</h3>
              <Button type="submit" fullWidth variant="contained" color="primary" className={classes.authbutton} >
                Login with Google   
              </Button>
              <Button type="submit" fullWidth variant="contained" color="primary" startIcon={<TwitterIcon />} className={classes.authbutton} >
                Login with Twitter  
              </Button>
              <Button type="submit" fullWidth variant="contained" color="primary" /*startIcon={<GoogleLoginIcon />*/ className={classes.authbutton} >
                Login with Face Book
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </TemplatePage>
  );
}

{/**画像取れない */}
const GoogleLoginIcon = () => {
  const classes = useStyles({})
  return (
    <Icon classes={{root: classes.iconRoot}}>
      <img className={classes.imageIcon} src="http://www.w3.org/2000/svg"/>
    </Icon>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '90vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',/**ログインページの画像 */
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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
    margin: theme.spacing(0, 0, 1),
  },
  authtopbutton: {
    margin: theme.spacing(2, 0, 2),
  },
  authbutton: {
    margin: theme.spacing(0, 0, 1),
  },
  mailauth: {
    margin: theme.spacing(2, 0, 0),
  },
}));