const { model, Schema } = require("mongoose")

const orderSchema = new Schema({
  customer: { type: String, required: true },
  address: { type: String, required: true },
  number: { type: Number, required: true },
  district: { type: String, required: true },
  city: { type: String, required: true },
  complement: { type: String, required: true },
  phone: { type: String, required: true },
  payment: { type: String, required: true },
  discount: { type: String, required: true },
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