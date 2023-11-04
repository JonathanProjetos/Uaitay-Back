const orderServices = require('../../services/order/orderService');

const  orderController = {

  getAllOrders: async (_req, res) => {
    const orders = await orderServices.getAllOrders();
    res.status(200).json(orders);
  },

  getOrderById: async (req, res) => {
    const { id } = req.params;
    const orderById = await orderServices.getOrderById(id);
    res.status(200).json(orderById);
  },

  createOrder: async (req, res) => {
    const { body } = req;
    const result = await orderServices.createOrder(body);
    res.status(201).json(result);
  }
  
}

module.exports = orderController;