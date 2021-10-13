const Joi = require('joi');

const createUserSchema = Joi.object({
    name: Joi.string().min(3).max(100).required()
});

const updateUserSchema = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().min(3).max(100).required()
});

module.exports.createUserSchema = createUserSchema;
module.exports.updateUserSchema = updateUserSchema;
