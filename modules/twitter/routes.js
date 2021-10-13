const express = require('express');
const {getUsers, createUser, updateUser, deleteUser} = require('./user-controller')
const {getTweets} = require('./tweet-controller')
const {getUserTweets, createUserTweet} = require('./user-tweet-controller')

const router = express.Router();

router.get('/users', getUsers);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

router.get('/tweets', getTweets);

router.get('/users/:userId/tweets', getUserTweets);
router.post('/users/:userId/tweets', createUserTweet);

module.exports = router;
