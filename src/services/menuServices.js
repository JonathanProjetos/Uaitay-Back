const products = require('../models/MenuModel');

const menuProductsServices = {

  getAllProductsMenu: async () => {
    const allProducts = await products.find();
    return allProducts;
  },

}

module.exports = menuProductsServices;