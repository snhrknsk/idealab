import errorCode from './../common/definition/errorcode'
import ideaBoardConnector from './../ideaBoard/ideaBoardConnector'

const logger = require('./../common/util/logging').systemLogger;

const reqTypeDef = {
    all: 0,
    category: 1,
    user: 2,
}

exports.getBoardList = function getAllBoardList (req, res, next) {
    var requestType = req.body.type;
    if(requestType == reqTypeDef.all) {
        ideaBoardConnector.getAllBoard(req).then(result => {
            res.send({errorCode: errorCode.code.success, boardInfo: result});
        }).catch(error => {
            logger.error(error);
            res.send({errorCode: errorCode.code.faital});
        })
    } else if(requestType == reqTypeDef.category) {
        ideaBoardConnector.getCateforyBoard(req);
    } else if(requestType == reqTypeDef.user) {
        ideaBoardConnector.getUserBoard(req);
    } else {
        logger.error('Request type is invalid. ' + requestType);
        res.send({errorCode: errorCode.code.faital});
    }
};
