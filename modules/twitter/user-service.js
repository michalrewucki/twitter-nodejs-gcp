const db = require('../../config/firestore')
const { USER_COLLECTION, TWEET_COLLECTION} = require('./constants')

async function findAll() {
    let result = await db.collection(USER_COLLECTION).get();
    return result.docs.map((doc) => { return { id: doc.id, ...doc.data() } });
}

async function createUser(user) {
    const response = await db.collection(USER_COLLECTION).add(user);
    return { id: response.id, ...user };
}

async function updateUser(user) {
    await db.collection(USER_COLLECTION).doc(user.id).set(user);
    return user;
}

async function deleteUser(id) {
    return await db.runTransaction(async transaction => {
        let user = await transaction.get(db.collection(USER_COLLECTION).doc(id));
        let tweets = await transaction.get(db.collection(TWEET_COLLECTION).where('userId', '==', id));

        transaction.delete(db.collection(USER_COLLECTION).doc(user.id));
        tweets.forEach(doc => {
            transaction.delete(doc.ref);
        });
        return  { id: user.id, ...user.data() };
    });
}

module.exports.createUser = createUser;
module.exports.updateUser = updateUser;
module.exports.findAll = findAll;
module.exports.deleteUser = deleteUser;
