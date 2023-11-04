const orderController = require('../../controllers/order/orderController');
const { Router } = require('express');

const RouterOrder = Router();

RouterOrder.get('/orders', orderController.getAllOrders);
RouterOrder.get('/order/:id', orderController.getOrderById);
RouterOrder.post('/create-order', orderController.createOrder);

module.exports = RouterOrder;