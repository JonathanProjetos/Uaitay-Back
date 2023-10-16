const order = require("../../models/OrdesModel")
const { validateBodyCreateOrder } = require("../../middlewares/joiOrder")


const orderService = {
  
  createOrder: async (body) => {
    console.log(body);
    const data = validateBodyCreateOrder(body);

    const newOrder = await order.create(data);

    return newOrder;
  }
};

module.exports = orderService;