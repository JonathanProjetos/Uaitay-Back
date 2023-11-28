const { expect } = require('chai');
const { describe, it } = require('mocha');
const sinon = require('sinon');
const MenuModel = require('../../../models/MenuModel');
const {
  getAllProductsMenu,
  createProductMenu,
  deleteProduct,
  updateProduct
} = require('../../../services/menu/menuServices');

describe('Testando os casos de uso de menuServices.', () => {

  describe('Testando a função getAllProductsMenu.', () => {

    afterEach(() => sinon.restore());
  
    it('A função getAllProductMenu deve retorna um array de produtos.', async () => {
      const mockMenu = [{
        name: 'Menu 1',
        price: 10,
        category: 'Frango'
      }]
  
      sinon.stub(MenuModel, 'find').resolves(mockMenu);
  
      expect(await getAllProductsMenu()).to.deep.equal(mockMenu);
  
    });
  
    it('A função getAllProductMenu deve lançar um erro caso não exista produtos.', async () => {
  
      sinon.stub(MenuModel, 'find').resolves(null);
  
      expect(await getAllProductsMenu().catch((err) => err.message)).to.be.equal('404|Nenhum produto cadastrado');
    });
  })

  describe('Testando a função createProductMenu.', () => {
    
    afterEach(() => sinon.restore());
    
      it('A função createProductMenu deve retornar os dados do novo produto.', async () => {
        const mockMenu = {
          name: 'Menu 1',
          price: 10,
          category: 'Frango'
        };
    
        sinon.stub(MenuModel, 'findOne').resolves(null);
        sinon.stub(MenuModel, 'create').resolves(mockMenu);
    
        expect(await createProductMenu(mockMenu)).to.deep.equal(mockMenu);
      });
    
      it('A função createProductMenu deve lançar um erro caso o produto já exista.', async () => {
        const mockMenu = {
          name: 'Menu 1',
          price: 10,
          category: 'Frango'
        };
    
        sinon.stub(MenuModel, 'findOne').resolves(mockMenu);
    
        expect(await createProductMenu(mockMenu).catch((err) => err.message)).to.be.equal('409|Produto já cadastrado');
      });
  });

  describe('Testando a função deleteProduct.', () => {
    afterEach(() => sinon.restore());
    
      it('A função deleteProduct deve retornar o produto que foi deletado.', async () => {
        const mockMenu = {
          name: 'Menu 1',
          price: 10,
          category: 'Frango'
        };

        const del = {
          acknowledged: true,
          deletedCount: 1
        }


        const name = 'Menu 1';
    
        sinon.stub(MenuModel, 'findOne').resolves(mockMenu);
        sinon.stub(MenuModel, 'deleteOne').resolves(del);
    
        expect(await deleteProduct(name)).to.deep.equal(del);
      });
    
      it('A função deleteProduct deve lançar um erro caso o produto não exista.', async () => {

        const name = 'Menu 1';
    
        sinon.stub(MenuModel, 'findOne').resolves(null);
    
        expect(await deleteProduct(name).catch((err) => err.message)).to.be.equal('404|Produto não encontrado');
      });

    });
  describe('Testando a função updateProduct.', () => {

    afterEach(() => sinon.restore());

    it('A função updateProduct deve retorna os dados do produto que foi atualizado.', async () => {
        const mockMenu = {
          name: 'Menu 1',
          price: 10
        };

        const mockMenuUpdate = {
          name: 'Menu 2',
          price: 20
        };

        sinon.stub(MenuModel, 'findOne').resolves(mockMenu.name);
        sinon.stub(MenuModel, 'updateOne').resolves(mockMenuUpdate);

        expect(await updateProduct(mockMenu)).to.deep.equal(mockMenuUpdate);
    });

    it('A função deve lançar um erro caso o produto não exista.', async () => {
      const  mockProduct = { 
        name: 'Menu 1',
        price: 20 
      };

      sinon.stub(MenuModel, 'findOne').resolves(null);

      expect(await updateProduct(mockProduct).catch((err) => err.message)).to.deep.equal('404|Produto não encontrado');
    });
  });
});