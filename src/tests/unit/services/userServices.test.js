const { expect } = require("chai");
const { describe, it } = require('mocha');
const sinon = require('sinon');
const userModel = require('../../../models/UserModel');
const jwt = require('jsonwebtoken');

const {
  getUser,
  checkAcessLogin
} = require('../../../services/user/userServices')

describe('Testando os caso de teste de userServices', () => {
  describe('Testando os caso da função getUser', () => {
    afterEach(() => sinon.restore());

    it('A função deve retorna um objeto contendo a confirmação "ok", mais o token.', async () => {
      const mockUser = {
        email: 'test@test.com',
        password: '123456789'
      };

      const result = {
        menssage: 'Ok',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.....'
      };
      
      sinon.stub(userModel, 'findOne').resolves(mockUser);
      sinon.stub(jwt, 'sign').returns(result.token);
      
      const actualResult = await getUser(mockUser);

      expect(actualResult).to.deep.equal(result);
    
    });

    it('Deve lançar um erro caso o usúario não exista.', async () => {

      const mockUser = {
        email: 'test@test.com',
        password: '123456789'
      };

      sinon.stub(userModel, 'findOne').resolves(null);

      expect(await getUser(mockUser).catch((err) => err.message)).to.deep.equal('401|Usuário não encontrado');
    })
  })

  describe('Testando os caso da função checkAcessLogin', () => {
    afterEach(() => sinon.restore());

    it('A função de retorna um objeto com a message "ok".', async () => {
      const email = 'test@test.com';

      const message = {
        message: 'ok'
      };

      sinon.stub(userModel, 'findOne').resolves(message);

      expect(await checkAcessLogin(email)).to.deep.equal(message);

    });

    it('A função deve lançar um error caso o email do usuário seja nulo.', async () => {
      const email = 'test@test.com';

      sinon.stub(userModel, 'findOne').resolves(null);

      expect(await checkAcessLogin(email).catch((err) => err.message)).to.deep.equal('401|unauthorized');
    })
  })
})