import models, { sequelize } from './../database/models'

/**一ページあたりの最大掲示板表示数  */
const maxLimit = 50;
const logger = require('./../common/util/logging').systemLogger;

exports.getAllBoard = function (req) {
    console.log('Idea Board Connector Get All Board')
    return new Promise((resolve, reject) => {
        models.idealists.findAll().then((result) => {
            var boardResultInfo = _createAllBoardResult(result);
            console.log(boardResultInfo);
            resolve(boardResultInfo);
        }).catch(error => {
            reject({error})
        });
    });
}

exports.getCategoryBoard = function (req) {

}

exports.getUserBoard = function (req) {

}

function _createAllBoardResult(result) {
    if (result == null) {
        return null;
    }
    var resultInfo = [];
    result.map((value) => {
        var info = {
            id: value.id,
            title: value.title,
            owner: value.owner,
            user_id: value.user_id,
            category: value.category,
            good: value.good,
            template_id: value.template_id,
        };
        resultInfo.push(info);
    })
    console.log('DB result')
    console.log(resultInfo);
    return resultInfo
}