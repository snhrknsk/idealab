import express from 'express';
import path from 'path';
import bodyParser from 'body-parser'
import cors from 'cors';
import config from './common/config'
import database from './database/daoFactory'
import logging from './common/util/logging'
import log4js from 'log4js'
import userManagement from './api/userManagement'
import ideaBoardManagement from './api/ideaBoardManagement'

const logger = logging.systemLogger;
const app = express();
app.use(express.static(path.join('./', 'dist')));;
app.use(express.json());
app.use(log4js.connectLogger(logging.accessLogger));
// app.use(cors);

app.get('/', (req, res) => {
  console.log('request get from root, display index.html')
  res.sendFile(path.join(__dirname, '..', '..', 'dist', 'index.html'))
});

app.get('/home', (req, res) => {
  console.log('request get from home, display index.html')
  res.sendFile(path.join(__dirname, '..', '..', 'dist', 'index.html'))
});

/**API */
app.post('/api/login', userManagement.login);
app.post('/api/signup', userManagement.registerUser);

app.post('/api/getBoardList', ideaBoardManagement.getBoardList)

/**テスト用API */
app.get('/testapi', (req, res) => {
  database.execute();
  res.set('Access-Control-Allow-Origin', '*').send({api: 'test'});
});

app.post('/testpostapi', (req, res) => {
  console.log(req.body.userid)
  res.set('Access-Control-Allow-Origin', '*').send({api: "post user is " + req.body.name});
});

/**定義外のリクエストが来た場合 */
app.get('*', function (req, res) {
  console.log('request get from *, display index.html')
  res.sendFile(path.join(__dirname, '..', '..', 'dist', 'index.html'))
});

app.listen(config.webSetting.port, ()=> {
  logger.info('server running port: ' + config.webSetting.port);
});