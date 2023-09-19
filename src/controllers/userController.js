const userServices = require('../services/userServices');

const userController = {

  getUser: async (req, res) => {
    const user = await userServices.getUser(req.body);
    res.status(200).json(user);
  },

}

module.exports = userController;