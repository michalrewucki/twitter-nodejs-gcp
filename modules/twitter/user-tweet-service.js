const db = require('../../config/firestore')
const { USER_COLLECTION, TWEET_COLLECTION } = require('./constants')

async function findAll(userId) {
    let result = await db.collection(TWEET_COLLECTION)
        .where('userId', '==', userId).get();
    return result.docs.map((doc) => { return { id: doc.id, ...doc.data() } });
}

async function createTweet(userId, tweet) {
    return await db.runTransaction(async transaction => {
        let user = (await transaction.get(db.collection(USER_COLLECTION).doc(userId)));
        let userTweet = {userId: user.id, ...tweet};
        transaction.create(db.collection(TWEET_COLLECTION).doc(), userTweet)
        return userTweet;
    });
}

module.exports.findAll = findAll;
module.exports.createTweet = createTweet;
