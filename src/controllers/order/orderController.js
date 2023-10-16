const orderServices = require('../../services/order/orderService');

const  orderController = {

  createOrder: async (req, res) => {
    const { body } = req;
    const result = await orderServices.createOrder(body);
    res.status(201).json(result);
  }
  
}

module.exports = orderController;