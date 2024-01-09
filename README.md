# Uaitay-Comida Chinesa (Back)
Bem-vindo ao UaiTay - Comida Chinesa, uma aplicação back-end desenvolvida em Node.js. Esta plataforma foi criada com o objetivo de fornecer funcionalidades de CRUD relacionadas à gestão de pedidos de comida chinesa, com ênfase na geração de informativos para pedidos feitos diretamente com a loja. Além disso, a aplicação oferece autenticação através do cookie-parse para garantir a segurança das operações.

</details>

## Sumário
- [Bem-vindo ao UaiTay Comida Chinesa](#Uaitay-Comida-Chinesa-(Back))
- [Contexto](#contexto)
- [Tecnologias e Ferramentas Utilizadas](#tecnologias-e-ferramentas-utilizadas)


## Contexto
O Uaitay-Comida Chinesa é uma ferramenta que acessa a bases de dados, é permite aos usuários:
- Fazer login;
- Criar ordem de pedido;
- Imprimir pedido;

__Quando logado é possivel__
- Criar novos produtos;
- Criar ordem de pedido;
- Atualizar um produto;
- Deletar um pedido;
- Deletar um produto;
- Imprimir pedido;

## Tecnologias e Ferramentas Utilizadas

Este projeto utiliza as seguintes tecnologias e ferramentas:

- [NodeJS](https://nodejs.org/en/) | Plataforma de execução runtime baseda em javascript. 
- [MongoDB](https://www.mongodb.com/docs/) | Banco de dados NoSQL não-relacional.
- [Moongose](https://mongoosejs.com/docs/) | ODM Object-documente-Mapper para MongoDB
- [Express](https://expressjs.com/pt-br/) | Framework para nodejs

O Node.js foi utilizado com o intuito de obter os benefícios da escalabilidade e eficiência, pois ele é capaz de lidar com vários tráfegos sem bloqueio e lida com solicitações com baixo consumo de recursos. O MongoDB foi introduzido pensando em desempenho e flexibilidade. Este conjunto proporciona uma maior facilidade de adaptação e evolução do aplicativo, sem contar também que o MongoDB trabalha com documentos no formato JSON, que é um formato nativo em algumas linguagens. O Mongoose foi implementado por ser uma biblioteca poderosa e flexível que simplifica a interação com o MongoDB e adiciona recursos úteis, como validação de dados, tratamento de relacionamentos e ganchos personalizados. O Express é um framework para o Node.js que permite construir aplicações web robustas e escaláveis de forma mais fácil e rápida.
