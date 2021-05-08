const log4js = require('log4js')

log4js.configure({
    appenders: {
        system: {type: 'file', filename: './log/system.log'},
        access: {type: 'file', filename: './log/access.log'} 
    },
    categories: {
        default: {appenders:['system'], level: 'debug'},
        web: {appenders: ['access'], level: 'info'} 
    }
});

const systemLogger = log4js.getLogger();
const accessLogger = log4js.getLogger('web');

function postReqInfoLog(req) {
    
}

module.exports = {
    'systemLogger': systemLogger,
    'accessLogger': accessLogger,
    'postReqInfoLog': postReqInfoLog,
}