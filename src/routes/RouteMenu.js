const { Router } = require('express');
const menuController = require('../controllers/menuController');

const RouteMenu = Router();

RouteMenu.get('/menu', menuController.getAllProductsMenu);

module.exports = RouteMenu;