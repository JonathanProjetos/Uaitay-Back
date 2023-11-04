const order = require("../../models/OrderModel")
const { validateBodyCreateOrder } = require("../../middlewares/joiOrder")


const orderService = {

  getAllOrders: async () => {
    const orders = await order.find();
    return orders;
  },

  getOrderById: async (id) => {
    const orderById = await order.findById(id);
    return orderById;
  },
  
  createOrder: async (body) => {
    const data = validateBodyCreateOrder(body);

    const newOrder = await order.create(data);

    return newOrder;
  }
};

module.exports = orderService;