import mysql from 'mysql';
import config from '../common/config'

const pool = mysql.createPool({
    connectionLimit: 5,
    host: config.databaseSetting.host,
    user: config.databaseSetting.user,
    password: config.databaseSetting.password,
    database: config.databaseSetting.database,
})

function execute(query, parameter) {
    console.log('Execute Query')
    pool.getConnection((err, connection) => {
        if(err) throw err
        if(parameter == null) {
            connection.query(query, (err, result, field) => {
                connection.release()
                if(err) throw err
                console.log(result[0])
                return result 
            } )
        } else {
            connection.query(query, parameter, (err, result, field) => {
                connection.release()
                if(err) throw err
                console.log(result[0])
                return result 
            } )
        }
    })
}

module.exports = {
    'execute': execute,
}
