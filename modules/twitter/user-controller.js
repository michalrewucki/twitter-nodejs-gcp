const userService = require('./user-service')
const {createUserSchema, updateUserSchema} = require('./user-schema')

async function deleteUser(req, res, next) {
    let user = await userService.deleteUser(req.params.id);
    res.send(JSON.stringify(user));
}

async function getUsers(req, res, next) {
    let users = await userService.findAll();
    res.send(JSON.stringify(users));
}

async function createUser(req, res, next) {
    const { error, value } = createUserSchema.validate(req.body);
    if (error) {
        next(error);
    } else {
        let user = await userService.createUser(value);
        res.send(JSON.stringify(user));
    }
}

async function updateUser(req, res, next) {
    const { error, value } = updateUserSchema.validate({
        id: req.params.id,
        ...req.body
    });

    if (error) {
        next(error);
    } else {
        let user = await userService.updateUser(value);
        res.send(JSON.stringify(user));
    }
}

module.exports.getUsers = getUsers;
module.exports.createUser = createUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
