const db = require('../../config/firestore')
const { TWEET_COLLECTION } = require('./constants')

async function findAll() {
    let result = await db.collection(TWEET_COLLECTION).get();
    return result.docs.map((doc) => { return { id: doc.id, ...doc.data() } });
}

module.exports.findAll = findAll;
