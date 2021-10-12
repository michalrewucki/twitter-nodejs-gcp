const express = require('express');
const {getUsers, createUser} = require('./user-controller')
const router = express.Router();

router.get('/users', getUsers);
router.post('/users', createUser);

module.exports = router;
