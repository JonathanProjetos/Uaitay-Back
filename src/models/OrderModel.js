const { model, Schema } = require("mongoose")

const orderSchema = new Schema({
  order: { type: Array, required: true },
  total: { type: Number, required: true },
  date: { type: String, required: true },
  hours: { type: String, required: true },
},
{
  versionKey: false,
})

const orderModel = model("order", orderSchema)

module.exports = orderModel