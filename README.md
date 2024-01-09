# Uaitay-Comida Chinesa (Back)
Comida Chinesa, uma aplicação back-end desenvolvida em Node.js. Esta plataforma foi criada com o objetivo de fornecer funcionalidades de CRUD relacionadas à gestão de pedidos de comida chinesa, com ênfase na geração de informativos para pedidos feitos diretamente com a loja. Além disso, a aplicação oferece autenticação através do cookie-parse para garantir a segurança das operações.

</details>

## Sumário
- [Bem-vindo ao UaiTay Comida Chinesa](#Uaitay-Comida-Chinesa-(Back))
- [Contexto](#contexto)
- [Tecnologias e Ferramentas Utilizadas](#tecnologias-e-ferramentas-utilizadas)
- [Instalação e Execução](#instalação-e-execução)
- [Git, GitHub e Histórico de Commits](#git-github-e-histórico-de-commits)

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
- [Cookie-Parse](https://www.npmjs.com/package/cookie-parser) | Middleware para transmissão de Token de forma segura.

O Node.js foi utilizado com o intuito de obter os benefícios da escalabilidade e eficiência, pois ele é capaz de lidar com vários tráfegos sem bloqueio e lida com solicitações com baixo consumo de recursos. O MongoDB foi introduzido pensando em desempenho e flexibilidade. Este conjunto proporciona uma maior facilidade de adaptação e evolução do aplicativo, sem contar também que o MongoDB trabalha com documentos no formato JSON, que é um formato nativo em algumas linguagens. O Mongoose foi implementado por ser uma biblioteca poderosa e flexível que simplifica a interação com o MongoDB e adiciona recursos úteis, como validação de dados, tratamento de relacionamentos e ganchos personalizados. O Express é um framework para o Node.js que permite construir aplicações web robustas e escaláveis de forma mais fácil e rápida. O cookie-parser oferece recursos de segurança, como a capacidade de assinar cookies. Isso ajuda a garantir a integridade dos dados armazenados nos cookies, prevenindo a manipulação por parte do cliente.

## Instalação e Execução
### Download do projeto
```
git clone git@github.com:JonathanProjetos/Uaitay-Back.git
```

### Arquivo env
- Dentro da pasta Food-Delivery existe o arquivo .env.example nele será nescessário remover o .example e oferecer a url do MongoDB, e uma senha para o Json-Web-Token.


### Instalar dependências
```
cd Uaitay-Back
npm install
npm run dev
```
### Adicionar os Produtos
- Abra o terminal e rode os comandos abaixo.
```
cd Uaitay-Back
npm run products:import

obs: Caso queira remover os produtos execute:
npm run products:destroy
```
### Tests
```
cd Uaitay-Back
npm test
ou 
npm run test:coverage
```

### Git, GitHub e Histórico de Commits
Este projeto utilizou a [Especificação de Commits Convencionais](https://www.conventionalcommits.org/en/v1.0.0/), com alguns tipos da [convenção Angular](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines). Além disso, foi utilizado o pacote [conventional-commit-cli](https://www.npmjs.com/package/conventional-commit-cli) para ajudar a seguir a convenção de commits. É importante utilizar a convenção de commits em projetos para manter o histórico de commits organizado e facilitar a leitura e o entendimento do que foi desenvolvido.
