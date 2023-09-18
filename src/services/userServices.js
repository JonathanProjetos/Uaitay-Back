const products = require('../models/UserModel');

const userServices = {

  getUser: async (email, password) => {
    const user = await products.findOne({ email, password });

    if (user === null) throw new Error('401|Usuario não encontrado');
    return { menssage: 'Ok' };
  },

}

module.exports = userServices;