const userModel = require('../../models/UserModel');
const joiUser = require('../../middlewares/joiUser');
const jwt = require('../../middlewares/token');

const userServices = {

  getUser: async (body) => {
    const { email, password } = joiUser(body);

    const user = await userModel.findOne({ email, password });

    if (user === null) throw new Error('401|Usuário não encontrado');
    const token = jwt.generateToken(email);

    return { menssage: 'Ok', token };
  },

  checkAcessLogin: async (email) => {
    // busco pelo email no banco de dados
    const user = await userModel.findOne({ email });

    if (!user) throw new Error('401|unauthorized');

    return { message: 'ok' };
  },


}

module.exports = userServices;