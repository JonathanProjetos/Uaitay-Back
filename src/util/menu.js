const menulist = [
  {
    id: 1,
    name: 'Yakisoba Tradicional (Grande)',
    price: 59.50,
    category: 'Yakisoba',
  },
  {
    id: 2,
    name: 'Yakisoba Tradicional (Médio)',
    price: 48.50,
    category: 'Yakisoba',
  },
  {
    id: 3,
    name: 'Frango Xadres (Grande)',
    price: 50.00,
    category: 'Frango',
  },
  {
    id: 4,
    name: 'Frango Xadres (Médio)',
    price: 42.00,
    category: 'Frango',
  },
  {
    id: 5,
    name: 'Yakisoba Vegetariano (Grande)',
    price: 48.00,
    category: 'Yakisoba',
  },
  {
    id: 6,
    name: 'Yakisoba Vegetariano (Médio)',
    price: 42.50,
    category: 'Yakisoba',
  },
  {
    id: 7,
    name: 'Yakisoba Camarão (Grande)',
    price: 75.50,
    category: 'Yakisoba',
  },
  {
    id: 8,
    name: 'Yakisoba Camarão (Médio)',
    price: 63.00,
    category: 'Yakisoba',
  },
  {
    id: 9,
    name: 'Carne com brócolis (Grande)',
    price: 73.00,
    category: 'Carne',
  },
  {
    id: 10,
    name: 'Carne com brócolis (Médio)',
    price: 60.00,
    category: 'Carne',
  },
  {
    id: 11,
    name: 'Costelinha (Grande)',
    price: 48.00,
    category: 'Carne',
  },
  {
    id: 12,
    name: 'Costelinha (Médio)',
    price: 42.00,
    category: 'Carne',
  },
  {
    id: 13,
    name: 'Filé acebolado (Grande)',
    price: 63.00,
    category: 'Carne',
  },
  {
    id: 14,
    name: 'Filé acebolado (Médio)',
    price: 53.00,
    category: 'Carne',
  },
  {
    id: 15,
    name: 'Frango a passarinho (Grande)',
    price: 43.00,
    category: 'Frango',
  },
  {
    id: 16,
    name: 'Frango a passarinho (Médio)',
    price: 38.00,
    category: 'Frango',
  },
  {
    id: 17,
    name: 'Frango empanado (Grande)',
    price: 40.00,
    category: 'Frango',
  },
  {
    id: 18,
    name: 'Frango empanado (Médio)',
    price: 35.00,
    category: 'Frango',
  },
  {
    id: 19,
    name: 'Tilápia ao molho gengibre (Médio)',
    price: 65.00,
    category: 'Peixe',
  },
  {
    id: 20,
    name: 'Tilápia ao molho gengibre (Médio)',
    price: 55.00,
    category: 'Peixe',
  },
  {
    id: 21,
    name: 'Frango agridoce (Grande)',
    price: 45.00,
    category: 'Agridoce',
  },
  {
    id: 22,
    name: 'Frango agridoce (Médio)',
    price: 38.00,
    category: 'Agridoce',
  },
  {
    id: 23,
    name: 'Lombo agridoce (Grande)',
    price: 50.00,
    category: 'Agridoce',
  },
  {
    id: 24,
    name: 'Lombo agridoce (Médio)',
    price: 40.00,
    category: 'Agridoce',
  },
  {
    id: 25,
    name: 'Arroz Chop Suey (Grande)',
    price: 34.00,
    category: 'Arroz',
  },
  {
    id: 26,
    name: 'Arroz Chop Suey (Médio)',
    price: 29.00,
    category: 'Arroz',
  },
  {
    id: 27,
    name: 'Arroz Chop Suey com Camarão (Grande)',
    price: 60.00,
    category: 'Arroz',
  },
  {
    id: 28,
    name: 'Arroz Chop Suey com Camarão (Médio)',
    price: 46.00,
    category: 'Arroz',
  },
  {
    id: 29,
    name: 'Rolinho de Camarão com Alho Poró (2un)',
    price: 17.00,
    category: 'Rolinho',
  },
  {
    id: 30,
    name: 'Rolinho de Alho Poró (2un)',
    price: 12.00,
    category: 'Rolinho',
  },
  {
    id: 31,
    name: 'Rolinho Tradicional (2un)',
    price: 7.50,
    category: 'Rolinho',
  },
  {
    id: 32,
    name: 'Rolinho Romeu e Julieta',
    price: 10.00,
    category: 'Rolinho',
  },
  {
    id: 33,
    name: 'Rolinho napolitano',
    price: 9.00,
    category: 'Rolinho',
  },
  {
    id: 34,
    name: 'Refrigerante lata coca-cola',
    price: 5.00,
    category: 'Refrigerante',
  },
  {
    id: 35,
    name: 'Refrigerante lata fanta',
    price: 5.00,
    category: 'Refrigerante',
  },
  {
    id: 36,
    name: 'Refrigerante lata guaraná',
    price: 5.00,
    category: 'Refrigerante',
  },
  {
    id: 37,
    name: 'Refrigerante lata sprite',
    price: 5.00,
    category: 'Refrigerante',
  },
  {
    id: 38,
    name: 'Amendoim',
    price: 1.50,
    category: 'Molhos',
  },
  {
    id: 39,
    name: 'Molho agridoce',
    price: 1.50,
    category: 'Molhos',
  },  
  {
    id: 40,
    name: 'Molho shoyo',
    price: 1.50,
    category: 'Molhos',
  },  
  {
    id: 41,
    name: 'Molho shoyo com gengibre',
    price: 1.50,
    category: 'Molhos',
  },
  {
    id: 42,
    name: 'Alho frito',
    price: 1.50,
    category: 'Molhos',
  },

];

module.exports = menulist;