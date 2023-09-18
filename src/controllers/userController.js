const userServices = require('../services/userServices');

const userController = {

  getUser: async (req, res) => {
    const { email, password } = req.body;
    const user = await userServices.getUser(email, password);
    res.status(200).json(user);
  },

}

module.exports = userController;