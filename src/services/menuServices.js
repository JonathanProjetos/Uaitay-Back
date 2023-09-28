const products = require('../models/MenuModel');
const joiProduct = require('../middlewares/joiProducts');

const menuProductsServices = {

  getAllProductsMenu: async () => {
    const allProducts = await products.find();
    return allProducts;
  },

  createProductMenu: async(data) => {
    const { name, price, category } = joiProduct.validadeBodyCreateProduct(data);

    const allProducts = await products.find();

    const productExists = allProducts.find((product) => product.name.toLowerCase() === name.toLowerCase());

    if (productExists) throw new Error('409|Produto já cadastrado');

    const newProduct = await products.create({ name, price, category});
    
    return newProduct;
  },

  deleteProduct: async (name) => {
    const strigName = joiProduct.validadeNameFromDeleteProduct(name);

    const allProducts = await products.find();

    const productExists = allProducts.find((product) => product.name.toLowerCase() === strigName.toLowerCase());

    if (!productExists) throw new Error('404|Produto não encontrado');

    const  result  = await products.deleteOne({ name: productExists.name });

    return result;

  }

}

module.exports = menuProductsServices;