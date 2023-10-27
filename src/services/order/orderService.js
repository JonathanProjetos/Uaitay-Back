const order = require("../../models/OrderModel")
const { validateBodyCreateOrder } = require("../../middlewares/joiOrder")


const orderService = {

  getAllOrders: async () => {
    const orders = await order.find();
    return orders;
  },
  
  createOrder: async (body) => {
    console.log(body);
    const data = validateBodyCreateOrder(body);

    const newOrder = await order.create(data);

    return newOrder;
  }
};

module.exports = orderService;