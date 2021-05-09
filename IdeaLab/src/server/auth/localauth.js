import errorCode from './../common/definition/errorcode'
import models, { sequelize } from './../database/models'

const logger = require('./../common/util/logging').systemLogger;

exports.localLogin = (credential) => {
    console.log('local login ' + credential);
    return new Promise((resolve, reject) => {
        models.users.findAll({
            where: {
                name: credential.username,
                password: credential.password,
                deleted_at: null
            }
        }).then(result => {
            if(result == null) {
                resolve({errorcode: errorCode.code.authUserNotFound})
            } else if (result.length != 1) {
                logger.error(result.length + ' users found')
                resolve({errorcode: errorCode.code.authUserNotFound})
            } else if (result.length == 1) {
                /**TODO: セッション作成 */
                var credentialId = 'testCredentialId'
                var userInfo = _createUserInfo(result);
                console.log(userInfo);
                resolve({errorcode: errorCode.code.success, userinfo: userInfo, credentialId: credentialId})
            }
            resolve({errorcode: errorCode.code.authUserNotFound})
        }).catch(error => {
            reject(error);
        })
    });
}

function _createUserInfo(user) {
    if (user == null) {
        return null;
    } else if (user.length != 1) {
        return null;
    }
    var userInfo = user[0];
    return {
        id: userInfo.id,
        name: userInfo.name,
        mail: userInfo.mail,
    }
}