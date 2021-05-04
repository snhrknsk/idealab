import express from 'express';
import path from 'path';
import bodyParser from 'body-parser'
import cors from 'cors';
import database from './database/daoFactory'

const app = express();
app.use(express.static(path.join('./', 'dist')));
// app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
// app.use(cors);

app.get('/', function (req, res) {
  console.log('request get from root, display index.html')
  res.sendFile(path.join(__dirname, '..', '..', 'dist', 'index.html'))
})

app.get('/home', function (req, res) {
  console.log('request get from home, display index.html')
  res.sendFile(path.join(__dirname, '..', '..', 'dist', 'index.html'))
})

/**テスト用API */
app.get('/testapi', (req, res) => {
  database.execute('select * from user', null);
  res.set('Access-Control-Allow-Origin', '*').send({api: 'test'});
})

app.post('/testpostapi', (req, res) => {
  console.log(req.body.userid)
  res.set('Access-Control-Allow-Origin', '*').send({api: "post user is " + req.body.userid});
})

/**定義外のリクエストが来た場合 */
app.get('*', function (req, res) {
  console.log('request get from *, display index.html')
  res.sendFile(path.join(__dirname, '..', '..', 'dist', 'index.html'))
})

app.listen(3000, ()=> {
  console.log('server running');
})