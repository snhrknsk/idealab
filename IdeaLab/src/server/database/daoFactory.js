import mysql from 'mysql2';
import config from '../common/config'
import Sequelize from 'sequelize'
import models from './models'

function execute() {
    (async()=>{
        const results = await models.categories.findAll();
        results.map((res)=>{
          console.log(res.id + " " + res.name);
        })
      })();
}

module.exports = {
    'execute': execute,
}
