import React from 'react';
import TemplatePage from '../pages/base/templatePage';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import axios from 'axios'
/**
 * いろいろ試すテスト用ファイル
 * home画面のsampleからリンク
 */
const testServer = 'http://localhost:3000/'

export default function sample() {
  const classes = useStyles();
  return (
    <TemplatePage>
        {/**ボタンを押してexpressのGET PAIを呼び出す */}
        <Button onClick={callGETAPI}>test get</Button>        
        {/**ボタンを押してexpressのPOST PAIを呼び出す */}
        <Button onClick={callPOSTAPI}>test post</Button>
        {/**websocketを利用してオブジェクトを別ブラウザからリアルタイムに動かす */}

    </TemplatePage>
  );
}

function callGETAPI (event) {
    console.log('test GET call')
    axios.get(testServer + 'testapi').then((res) => {console.log(res)}).catch(console.error)
}

function callPOSTAPI (event) {
    var params = new URLSearchParams()
    params.append('userid', 123)
    params.append('username', 'Yamada Tarou')
    console.log('test POST call :' + params)
    var data = {
        userid: '5',
        username: 'Yamada Trou'
    }
    axios.post(testServer + 'testpostapi', data).then((res) => {console.log(res)}).catch(console.error)
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