const orderServices = require('../../services/order/orderService');

const  orderController = {

  getAllOrders: async (_req, res) => {
    const orders = await orderServices.getAllOrders();
    res.status(200).json(orders);
  },

  createOrder: async (req, res) => {
    const { body } = req;
    const result = await orderServices.createOrder(body);
    res.status(201).json(result);
  }
  
}

module.exports = orderController;