const { expect } = require('chai');
const { describe, it } = require('mocha');
const sinon = require('sinon');
const OrderModel = require('../../../models/OrderModel');
const {
  getAllOrders,
  getOrderById,
  createOrder
} = require('../../../services/order/orderService')

const mockOrder = [{
  customer: 'Jonathan',
  address: 'Rua dos testes',
  number: 0,
  district: 'Bali',
  city: 'Indonésia',
  complement: 'casa',
  phone: '(xx) xxxxx-xxxx',
  payment: 'PIX',
  discount: 'Não',
  order: [{
    _id: "7879878979889798798",
    name: 'Yakissoba Tradicional (Grande)',
    price: 59.5,
    category: 'Yakissoba'
  }],
  total: 59.5,
  date: '20-11-2023',
  hours: '11:00:50',
}];

describe('Testando os casos de teste de orderServices.', () => {
  describe('Testando os caso da função getAllOrders.', () => {
    afterEach(() => sinon.restore());

    it('A função deve retornar um array contendo os pedidos já realizados.', async () => {

      sinon.stub(OrderModel, 'find').resolves(mockOrder);

      expect(await getAllOrders()).to.deep.equal(mockOrder);
    });

  });

  describe('Testando os caso da função getOrderById.', () => {
    afterEach(() => sinon.restore());

    it('A função deve retornar um objeto contendo os dados do cliente.', async () => {

      sinon.stub(OrderModel, 'findById').resolves(mockOrder[0])

      const id = '653b025dcf11cd3382116180'

      expect(await getOrderById(id)).to.deep.equal(mockOrder[0])

    })
  });

  describe('testando os caso da função createOrder', () => {
    afterEach(() => sinon.restore());

    it('A função deve retorna um objeto com os dados do pedido criado.', async () => {

      sinon.stub(OrderModel, 'create').resolves(mockOrder[0]);

      expect(await createOrder(mockOrder[0])).to.deep.equal(mockOrder[0]);
    })
  });
});