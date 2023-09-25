const tokenFunction = require('./token');

module.exports = {
  // Middleware que verifica se o token é válido.
  verifyToken: (req, _res, next) => {
    try {
      let token = req.cookies['token'];
      console.log("token", token);
      const dados = tokenFunction.validateToken(token);
      req.email = dados.email;
      next();
    } catch (err) {
      throw new Error('404|Token not found');
    }
  },
};