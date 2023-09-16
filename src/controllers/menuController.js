const menuServices = require('../services/menuServices');

const menuController = {
  getAllProductsMenu: async (_req, res) => {
    const allProducts = await menuServices.getAllProductsMenu();
    res.status(200).json(allProducts);
  },
}

module.exports = menuController;