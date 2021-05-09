import signUp from './../user/signUp'
import authConfig from './../common/definition/auth'
import errorCode from './../common/definition/errorcode'
import localAuth from './../auth/localauth'

const logger = require('./../common/util/logging').systemLogger;

exports.registerUser = function registerUser (req, res, next) {
    var userInfo = req.body;
    logger.info('Register User username:' + userInfo.name);
    signUp.signUp(userInfo).then(result => {
        res.send({success: true});
    }).catch(error => {
        res.send({success: false, cause: error});
    });
};

exports.login = function login (req, res, next) {
    var credential = {username: req.body.username, password: req.body.password}
    var authType = req.body.authType;
    var authDef = authConfig.authType;
    switch(authType){
        case authDef.guest:
            res.send({errorCode: errorCode.code.authUnsupportedProvider});
            break;
        case authDef.local:
            localAuth.localLogin(credential).then( result => {
                console.log(result)
                res.send(result)
            }).catch (error => {
                res.send({errorCode: error.errorCode})    
            });
            break;
        case authDef.twitter:
            res.send({errorCode: errorCode.code.authUnsupportedProvider});
            break;
        default:
            res.send({errorCode: errorCode.code.authUnsupportedProvider});
    }
};

exports.logout = function logout (req, res, next) {

}

function getUserInfo () {

}

// module.exports = {
//     'registerUser': registerUser,
//     'login' : login
// }