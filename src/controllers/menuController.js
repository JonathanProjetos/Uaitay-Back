const menuServices = require('../services/menuServices');

const menuController = {
  getAllProductsMenu: async (_req, res) => {
    const allProducts = await menuServices.getAllProductsMenu();
    res.status(200).json(allProducts);
  },

  createProductMenu: async (req, res) => {
    const newProduct = await menuServices.createProductMenu(req.body);
    res.status(201).json(newProduct);
  },

  deleteProduct: async (req, res) => {
    const { name } = req.body;
    console.log(name);
    const message = await menuServices.deleteProduct(name);
    res.status(200).json(message);
  }
}

module.exports = menuController;