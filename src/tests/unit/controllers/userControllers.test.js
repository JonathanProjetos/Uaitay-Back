const { expect } = require('chai');
const { describe, it } = require('mocha');
const sinon = require('sinon');
const {
  getUser,
  checkAcessLogin
} = require('../../../controllers/user/userController');
const userServices = require('../../../services/user/userServices');

describe('Testando os caso de teste de userControllers', () => {

  describe('Testando o caso de teste da função getUser', () => {
    afterEach(() => sinon.restore());

    it('A função deve responder os dados corretamente no formato de cookie como o status 200.', async () => {

      const req = {
        body : {
          email: 'test@test.com',
          password: '123456789'
        }
      };

      const res = {
        status: sinon.stub().returnsThis(),
        cookie: sinon.stub(),
        json: sinon.stub()
      };

      const result = { message: 'Ok', token: 'fnnfkjsadfkjsbdfjksbdfksjdbf......'};

      sinon.stub(userServices, 'getUser').resolves(result);

      await getUser(req, res);

      expect(res.status.calledWith(200)).to.be.equal(true);
      expect(res.cookie.calledWith('token', result.token)).to.be.equal(true);
      expect(userServices.getUser.calledWith(req.body)).to.be.equal(true);

    });
  });

  describe('Testando o caso de teste da função checkAcesslogin', () => {
    afterEach(() => sinon.restore());

    it('A função deve responder um objeto como resposta com o status 200', async () => {

      const email = 'test@test.com';

      const  req = {
        email
      };

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };

      const result = { message: 'ok'};

      sinon.stub(userServices, 'checkAcessLogin').resolves(result);

      await checkAcessLogin(req, res);

      expect(res.status.calledWith(200)).to.be.equal(true);
      expect(res.json.calledWith(result)).to.be.equal(true);
      expect(await userServices.checkAcessLogin.calledWith(req.email)).to.be.equal(true);
    });  
  });

});
