const products = require('../../models/MenuModel');
const joiProduct = require('../../middlewares/joiProducts');

const menuProductsServices = {

  getAllProductsMenu: async () => {
    const allProducts = await products.find();

    if(!allProducts) throw new Error('404|Nenhum produto cadastrado')

    return allProducts;
  },  

  createProductMenu: async(data) => {
    const { name, price, category } = joiProduct.validadeBodyCreateProduct(data);

    const product = await products.findOne({ name });

    if (product) throw new Error('409|Produto já cadastrado');

    const newProduct = await products.create({ name, price, category});
    
    return newProduct;
  },

  deleteProduct: async (body) => {

    const name = joiProduct.validadeNameProduct(body);

    const product = await products.findOne({ name });

    if (!product) throw new Error('404|Produto não encontrado');

    const  result  = await products.deleteOne({ name: product.name });

    return result;

  },

  updateProduct: async (body) => {

    const { name, price } = joiProduct.validadeBodyUpdateProduct(body);

    const product = await products.findOne({ name });

    if (!product) throw new Error('404|Produto não encontrado');

    const result  = await products.updateOne({ name: product.name }, { price }, { new: true });

    return result;
  }

}

module.exports = menuProductsServices;