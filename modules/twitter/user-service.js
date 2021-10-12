const db = require('../../config/firestore')
const collection = 'User'

async function findAll() {
    let querySnapshot = await db.collection(collection).get();
    return querySnapshot.docs.map((doc) => { return { id: doc.id, ...doc.data() } });
}

async function createUser(user) {
    return await db.collection(collection).doc().set(user);
}

module.exports.createUser = createUser;
module.exports.findAll = findAll;
