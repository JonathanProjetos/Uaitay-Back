const { Router } = require('express');
const menuController = require('../controllers/menuController');

const RouteMenu = Router();

RouteMenu.get('/menu', menuController.getAllProductsMenu);
RouteMenu.post('/create-product', menuController.createProductMenu);
RouteMenu.delete('/delete-product', menuController.deleteProduct);
RouteMenu.patch('/update-product', menuController.updateProduct);

module.exports = RouteMenu;