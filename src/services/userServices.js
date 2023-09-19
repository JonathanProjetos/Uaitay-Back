const products = require('../models/UserModel');
const joiUser = require('../middlewares/joiUser');

const userServices = {

  getUser: async (body) => {
    const { email, password } = joiUser(body);

    const user = await products.findOne({ email, password });

    if (user === null) throw new Error('401|Usuario não encontrado');
    return { menssage: 'Ok' };
  },

}

module.exports = userServices;