const userServices = require('../services/userServices');

const userController = {

  getUser: async (req, res) => {
    const { menssage, token } = await userServices.getUser(req.body);

    console.log(token);
    res.cookie('token', token, { httpOnly: true, secure: true, path: '/', maxAge: 3600000 });
    res.status(200).json({ menssage });
  },
  
  checkAcessLogin: async (req, res) => {
    const { email } = req;
    console.log(email);
    const message = await userServices.checkAcessLogin(email);
    res.status(200).json(message);
  },

}

module.exports = userController;