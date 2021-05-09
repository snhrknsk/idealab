import signUp from './signUp'

const logger = require('./../common/util/logging').systemLogger;

function registerUser (userInfo,res) {
    logger.info('Register User username:' + userInfo.name)
    signUp.signUp(userInfo).then(result => {

        res.send({success: true});
    }).catch(error => {
        res.send({success: false, cause: error});
    })
}

function login (credential) {
    
}

function getUserInfo () {

}

module.exports = {
    'registerUser': registerUser,
    'login' : login
}