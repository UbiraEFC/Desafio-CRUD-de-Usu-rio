const { Router } = require('express');
const userController = require('../src/controller/user');


const app = Router();

app.route('/user/signup')
    .post(userController.signup)

app.route('/user/signin')
    .post(userController.signin)

app.route('/user')
    .get(userController.get);


module.exports = app;