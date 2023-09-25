  const userServices = require('../services/userServices');

  const userController = {

    getUser: async (req, res) => {
      const { menssage, token } = await userServices.getUser(req.body);
      res.cookie('token', token, { httpOnly: true, secure: true, path: '/', maxAge: 3600000, sameSite: 'None' })
      res.status(200).json({ menssage, token });
    },
    
    checkAcessLogin: async (req, res) => {
      const { email } = req;
      const message = await userServices.checkAcessLogin(email);
      res.status(200).json(message);
    },

  }

  module.exports = userController;