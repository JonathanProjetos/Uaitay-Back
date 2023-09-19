const products = require('../models/MenuModel');
const joiProduct = require('../middlewares/joiProducts');

const menuProductsServices = {

  getAllProductsMenu: async () => {
    const allProducts = await products.find();
    return allProducts;
  },

  createProductMenu: async(data) => {
    const { name, price, category } = joiProduct(data);

    const allProducts = await products.find();

    const productExists = allProducts.find((product) => product.name.toLowerCase() === name.toLowerCase());

    if (productExists) throw new Error('409|Produto já cadastrado');

    const newProduct = await products.create({ name, price, category});
    
    return newProduct;
  }

}

module.exports = menuProductsServices;