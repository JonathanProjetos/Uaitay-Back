const { model, Schema } = require('mongoose');

const menuSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
},
{
  versionKey: false,
}
);

const menuModel = model('menu', menuSchema);

module.exports = menuModel;
