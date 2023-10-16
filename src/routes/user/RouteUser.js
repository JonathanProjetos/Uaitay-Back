const { Router } = require('express');
const userController = require('../../controllers/user/userController');
const checkToken = require('../../middlewares/decodeToken');

const RouteUser = Router();

RouteUser.post('/login', userController.getUser);
RouteUser.get('/login/validate', checkToken.verifyToken, userController.checkAcessLogin);

module.exports = RouteUser;
