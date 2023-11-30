const { expect } = require('chai')
const { describe, it } = require('mocha')
const MenuModel = require('../../../models/MenuModel')


describe('Create MenuModel with correct schema.', () => {

  it('should create a new MenuModel.', () => {
    const menu = new MenuModel({
      name: 'Menu 1',
      price: 10,
      category: 'Frango'
    });
    expect(menu.name).to.be.equal('Menu 1');
    expect(menu.price).to.be.equal(10);
    expect(menu.category).to.be.equal('Frango');
  });

});

