const { expect } = require('chai');
const { describe, it } = require('mocha');
const sinon = require('sinon');
const MenuModel = require('../../../models/MenuModel');
const {
  getAllProductsMenu,
  createProductMenu
} = require('../../../services/menu/menuServices');

describe('Testando os casos de uso de menuServices', () => {

  describe('Testando a função getAllProductsMenu', () => {

    afterEach(() => sinon.restore());
  
    it('A função getAllProductMenu deve retorna um array de produtos', async () => {
      const mockMenu = [{
        name: 'Menu 1',
        price: 10,
        category: 'Frango'
      }]
  
      sinon.stub(MenuModel, 'find').resolves(mockMenu);
  
      expect(await getAllProductsMenu()).to.deep.equal(mockMenu);
  
    });
  
    it('A função getAllProductMenu deve retornar um erro caso não tenha produtos', async () => {
  
      sinon.stub(MenuModel, 'find').resolves(null);
  
      expect(await getAllProductsMenu().catch((err) => err.message)).to.be.equal('404|Nenhum produto cadastrado');
    });
  })

  describe('Testando a função createProductMenu', () => {
    
    afterEach(() => sinon.restore());
    
      it('A função createProductMenu deve retornar um novo produto', async () => {
        const mockMenu = {
          name: 'Menu 1',
          price: 10,
          category: 'Frango'
        };
    
        sinon.stub(MenuModel, 'findOne').resolves(null);
        sinon.stub(MenuModel, 'create').resolves(mockMenu);
    
        expect(await createProductMenu(mockMenu)).to.deep.equal(mockMenu);
      });
    
      it('A função createProductMenu deve retornar um erro caso o produto já exista', async () => {
        const mockMenu = {
          name: 'Menu 1',
          price: 10,
          category: 'Frango'
        };
    
        sinon.stub(MenuModel, 'findOne').resolves(mockMenu);
    
        expect(await createProductMenu(mockMenu).catch((err) => err.message)).to.be.equal('409|Produto já cadastrado');
      });
  });


});