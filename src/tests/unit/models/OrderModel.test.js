const { expect } = require('chai');
const { describe, it } = require('mocha');
const OrderModel = require('../../../models/OrderModel');

describe('Create OrderModel with correct schema', () => {

  it('should create a new OrderModel', () => {
    const order = new OrderModel({
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
    });

    expect(order.customer).to.equal("Jonathan");
    expect(order.address).to.equal("Rua dos bobos");
    expect(order.number).to.equal(50);
    expect(order.district).to.equal("Centro");
    expect(order.city).to.equal("São Paulo");
    expect(order.complement).to.equal("Apto 50");
    expect(order.phone).to.equal("11999999999");
    expect(order.payment).to.equal("PIX");
    expect(order.discount).to.equal("Sim");
    expect(order.order[0].name).to.equal("Menu 1");
    expect(order.order[0].price).to.equal(10);
    expect(order.order[0].category).to.equal("Frango");
    expect(order.total).to.equal(10);
    expect(order.date).to.equal("01-01-2021");
    expect(order.hours).to.equal("12:00:00");
    
  });

});