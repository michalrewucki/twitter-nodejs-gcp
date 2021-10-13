const tweetService = require('./tweet-service')

async function getTweets(req, res, next) {
    const tweets = await tweetService.findAll();
    res.send(JSON.stringify(tweets));
}

module.exports.getTweets = getTweets;
