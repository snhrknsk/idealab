import models, { sequelize } from './../database/models'

function signUp (userInfo) {
    console.log(userInfo);
    return new Promise((resolve, reject) => {
        console.log(validateUser(userInfo).then(valid => {
            console.log("Register User isValid ? " + valid)
            // return new Promise((resolve, reject) => {
                if (valid) {
                    models.users.create(userInfo).then((result) => {
                        console.log('created user:' + result.name + ' id:' +result.id);
                        resolve(result);
                    }).catch(error => {
                        reject(error)
                    })
                } else {
                    reject("Same name user.")
                }
            // });
        }).catch(error => {
            console.log(error);
        }));
    });
}

function validateUser (userInfo) {
    var username = userInfo.name;
    return new Promise((resolve, reject) => {
        models.users.findAll({
            attributes: [
                [sequelize.fn('COUNT', sequelize.col('id')), 'n_user']
            ],
            where: {
                name: username,
                deleted_at: null
            }
        }).then(result => {
            if(result[0].dataValues.n_user > 0) {
                resolve(false)
            }
            resolve(true)
        }).catch(error => {
            reject(error);
        })
    })

    // var isValid = models.users.findAll({
    //         attributes: [
    //             [sequelize.fn('COUNT', sequelize.col('id')), 'n_user']
    //         ],
    //         where: {
    //             name: username,
    //             deleted_at: null
    //         }
    //     })
    //     // .then((result) => {
    //     //     if (result.n_user > 0) {
    //     //         console.log( usrename + ' is already exist');
    //     //         return false;
    //     //     }
    //     //     console.log('user count ' + result.n_user);
    //     //     return false;
    //     // });
    // isValid.sync();
    // console.log('validation ' + isValid);
    // return isValid;
}

module.exports = {
    'signUp': signUp
}