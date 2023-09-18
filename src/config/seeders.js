// referência: https://www.youtube.com/watch?v=SRBLmyeUFFI
require('dotenv/config');
const products = require('../util/menu');
const userModel = require('../models/UserModel');
const Product = require('../models/MenuModel');
const user = require('../util/user');
const connectDB = require('./connection');

connectDB();

const importProducts = async () => {
  try {
    await Product.deleteMany();
    await userModel.deleteMany();

    await Product.insertMany(products);
    await userModel.insertMany(user);

    console.log('Data Imported');
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

const deleteProducts = async () => {
  try {
    await Product.deleteMany();
    await userModel.deleteMany();

    console.log('Data destroyed');
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

switch (process.argv[2]) {
  case '-d': {
    deleteProducts();
    break;
  }
  default: {
    importProducts();
  }
}

