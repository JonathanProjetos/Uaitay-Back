const { describe, it } = require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');
const {
  createOrder,
  getAllOrders,
  getOrderById
} = require('../../../controllers/order/orderController');
const orderService = require('../../../services/order/orderService');

const order = {
  customer: "Jonathan",
  address: "Rua dos bobos",
  number: 50,
  district: "Centro",
  city: "São Paulo",
  complement: "Apto 50",
  phone: "11999999999",
  payment: "PIX",
  discount: "Sim",
  order: [
    {
      name: "Menu 1",
      price: 10,
      category: "Frango",
    }
  ],
  total: 10,
  date: "01-01-2021",
  hours: "12:00:00",
};

describe('Testando os casos de Teste de orderController', () => {

  describe('Testando os casos de teste da função createOrder', () => {
    afterEach(() => sinon.restore());

    it('A função deve responder com os dados cadastrados no banco de dados, juntamente com o status 201.', async () => {
      const req = {
        body: {
          ...order
        }
      }

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub()
      }

      sinon.stub(orderService, 'createOrder').resolves(order);

      await createOrder(req, res);

      expect(res.status.calledWith(201)).to.be.equal(true);
      expect(res.json.calledWith(order)).to.be.equal(true);
      expect(orderService.createOrder.calledWith(req.body)).to.be.equal(true);

    });
  })

  describe('Testando os casos de teste da função getAllOrders', () => {
    afterEach(() => sinon.restore());

    it('A função de responder com um array de pedidos, juntamente com o status 200.', async () => {
      
      const req = {};

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub()
      }
      
      sinon.stub(orderService, 'getAllOrders').resolves([order]);
      
      await getAllOrders(req, res)

      expect(res.status.calledWith(200)).to.be.equal(true);
      expect(res.json.calledWith([order])).to.be.equal(true);
      expect(orderService.getAllOrders.calledWith()).to.be.equal(true);

    })
  })

  describe('Testando os casos de teste da função getOrderById', () => {
    afterEach(() => sinon.restore());

    it('A função deve responder com um objeto com os dados do pedido, juntamente com o status 200.', async () => {
      const req = {
        params: {
          id: 's4d54654654sdsd'
        }
      }

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub()
      }

      sinon.stub(orderService, 'getOrderById').resolves(order);

      await getOrderById(req, res);

      expect(res.status.calledWith(200)).to.be.equal(true);
      expect(res.json.calledWith(order)).to.be.equal(true);
      expect(orderService.getOrderById.calledWith(req.params.id)).to.be.equal(true);
    })
  })

})