const userService = require('./user-service')

async function getUsers(req, res) {
    let users = await userService.findAll();
    console.log(users);
    res.send(JSON.stringify(users));
}

async function createUser(req, res) {
    let user = await userService.createUser(req.body);
    res.send(JSON.stringify(user));
}

module.exports.getUsers = getUsers;
module.exports.createUser = createUser;
