import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';

import URLs from './../../../common/config';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

function preventDefault(event) {
  event.preventDefault();
}

export default function ideaListPage() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container>
        <Grid item>
          <h2 className={classes.title}>アイデア発想</h2>
          {/* <Typography component="h2" variant="h6" className={classes.title}>
            アイデア発想
          </Typography> */}
          <Box display="flex" flexWrap="wrap" className={classes.maincss}  >
            <Box p={1}>
              <Link href={URLs.brain} variant="body2">ブレインストーミング</Link>
              <LiveHelpIcon className={classes.icon} fontSize="small" />
            </Box>
            <Box p={1}>
              <Link href={URLs.persona} variant="body2">ペルソナ</Link>
              <LiveHelpIcon className={classes.icon} fontSize="small" />
            </Box>
            <Box p={1}>
              <Link href={URLs.signin} variant="body2">カードソーティング</Link>
              <LiveHelpIcon className={classes.icon} fontSize="small" />
            </Box>
            <Box p={1}>
              <Link href={URLs.signin} variant="body2">マインドマップ</Link>
              <LiveHelpIcon className={classes.icon} fontSize="small" />
            </Box>
            <Box p={1}>
              <Link href={URLs.signin} variant="body2">ストーリー</Link>
              <LiveHelpIcon className={classes.icon} fontSize="small" />
            </Box>
            <Box p={1}>
              <Link href={URLs.signin} variant="body2">PMI</Link>
              <LiveHelpIcon className={classes.icon} fontSize="small" />
            </Box>
            <Box p={1}>
              <Link href={URLs.signin} variant="body2">共感マップ</Link>
              <LiveHelpIcon className={classes.icon} fontSize="small" />
            </Box>
            <Box p={1}>
              <Link href={URLs.signin} variant="body2">オズボーンストーミング</Link>
              <LiveHelpIcon className={classes.icon} fontSize="small" />
            </Box>
            <Box p={1}>
              <Link href={URLs.signin} variant="body2">マンダラート</Link>
              <LiveHelpIcon className={classes.icon} fontSize="small" />
            </Box>
            <Box p={1}>
              <Link href={URLs.signin} variant="body2">アンチプロブレム</Link>
              <LiveHelpIcon className={classes.icon} fontSize="small" />
            </Box>
            <Box p={1}>
              <Link href={URLs.signin} variant="body2">マトリックス</Link>
              <LiveHelpIcon className={classes.icon} fontSize="small" />
            </Box>
            <Box p={1}>
              <Link href={URLs.signin} variant="body2">ホワイトボード</Link>
              <LiveHelpIcon className={classes.icon} fontSize="small" />
            </Box>
          </Box>
          <h2 className={classes.title}>ビジネス</h2>
          {/* <Typography component="h2" variant="h6" className={classes.title}>
            ビジネス
          </Typography> */}
          <Box display="flex" flexWrap="wrap" className={classes.maincss}  >
            <Box p={1}>
              <Link href={URLs.brain} variant="body2">カスタマージャーニー</Link>
              <LiveHelpIcon className={classes.icon} fontSize="small" />
            </Box>
            <Box p={1}>
              <Link href={URLs.persona} variant="body2">デザイン志向キャンパス</Link>
              <LiveHelpIcon className={classes.icon} fontSize="small" />
            </Box>
            <Box p={1}>
              <Link href={URLs.persona} variant="body2">SWOT</Link>
              <LiveHelpIcon className={classes.icon} />
            </Box>
          </Box>  
        </Grid>
      </Grid>
      {/* <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>すべて表示</Link>
      </div> */}
    </React.Fragment>
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