import React from 'react';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@material-ui/core/Button';

import URLs from './../../../common/config';

export default function authPage() {
    const classes = useStyles();
    return (
      <React.Fragment>
        {/* <Grid container component="main" className={classes.root}> */}
          <h2 className={classes.title}>ログイン</h2>
          <form className={classes.form} noValidate>
            <h3 className={classes.mailauth}>メールアドレスでログイン</h3>
            <TextField variant="standard" margin="none" required fullWidth className={classes.submit}
              id="email" label="Email" name="email"
              autoComplete="email" />
            <TextField variant="standard" margin="normal" required fullWidth className={classes.submit}
              name="password" label="パスワード" type="password" id="password" autoComplete="current-password" />
            <FormControlLabel className={classes.submit}
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
            <h3 className={classes.authtopbutton}>ソーシャルアカウント</h3>
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
          <div className={classes.strinfo}>
            外部サービスを利用して、アカウントを新規作成する場合は、<a href="/idealab/policy">利用規約</a>に同意するものとします。
          </div>
        {/* </Grid> */}
      </React.Fragment>
    );
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      height: '90vh',
    },
    form: {
      width: '90%', // Fix IE 11 issue.
      marginTop: theme.spacing(1,2,1),
    },
    strinfo: {
      margin: theme.spacing(1, 2, 3),
      size: 2
    },
    title: {
      margin: theme.spacing(2, 2, 2),
    },
    submit: {
      margin: theme.spacing(0, 2, 1),
    },
    authtopbutton: {
      margin: theme.spacing(2, 2, 2),
    },
    authbutton: {
      margin: theme.spacing(0, 2, 1),
    },
    mailauth: {
      margin: theme.spacing(0, 2, 0),
    },
  }));