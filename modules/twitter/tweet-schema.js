const Joi = require('joi');

const createTweetSchema = Joi.object({
    content: Joi.string().min(3).max(50).required()
});

module.exports.createTweetSchema = createTweetSchema;
