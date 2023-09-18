const { Router } = require('express');
const userController = require('../controllers/userController');

const RouteUser = Router();

RouteUser.post('/login', userController.getUser);

module.exports = RouteUser;
