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
}

module.exports = menuController;