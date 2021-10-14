const e = require("express");
const {ValidationError} = require("joi");

function handleError(error, req, res, next) {
    if (error instanceof ValidationError) {
        res.status(400);
        res.send({
            message: error.details.map(details => details.message).join(','),
            error: req.app.get('env') === 'development' ? error : {}
        })
    } else {
        res.status(error.status || 500);
        res.send({
            message: error.message,
            error: req.app.get('env') === 'development' ? error : {}
        })
    }
}

module.exports = handleError;
