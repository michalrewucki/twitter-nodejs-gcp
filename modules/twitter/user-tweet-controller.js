const userTweetService = require('./user-tweet-service');
const { createTweetSchema } = require('./tweet-schema');

async function getUserTweets(req, res, next) {
    let userTweets = await userTweetService.findAll(req.params.userId);
    res.send(JSON.stringify(userTweets));
}

async function createUserTweet(req, res, next) {
    const { error, value } = createTweetSchema.validate(req.body);
    if (error) next(error);
    else {
        let tweet = await userTweetService.createTweet(req.params.userId, value)
        res.send(JSON.stringify(tweet));
    }
}

module.exports.getUserTweets = getUserTweets;
module.exports.createUserTweet = createUserTweet;
