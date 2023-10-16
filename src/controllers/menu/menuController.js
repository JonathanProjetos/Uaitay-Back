const menuServices = require('../../services/menu/menuServices');

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
    const message = await menuServices.deleteProduct(name);
    res.status(200).json(message);
  },

  updateProduct: async (req, res) => {
    console.log(req.body);
    const message = await menuServices.updateProduct(req.body);
    res.status(200).json(message);
  }
}

module.exports = menuController;