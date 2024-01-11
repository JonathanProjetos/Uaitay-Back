# Uaitay-Comida Chinesa (Back)
UaiTay Comida Chinesa, uma aplicação back-end desenvolvida em Node.js. Esta plataforma foi criada com o objetivo de fornecer funcionalidades de CRUD relacionadas à gestão de pedidos de comida chinesa, com ênfase na geração de informativos para pedidos feitos diretamente com a loja. Além disso, a aplicação oferece autenticação através do cookie-parse para garantir a segurança das operações.

</details>

## Sumário
- [Bem-vindo ao UaiTay Comida Chinesa](#Uaitay-Comida-Chinesa-(Back))
- [Contexto](#contexto)
- [Tecnologias e Ferramentas Utilizadas](#tecnologias-e-ferramentas-utilizadas)
- [Instalação e Execução](#instalação-e-execução)
- [Testes](#Tests)
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

- [NodeJS](https://nextjs.org/docs) | Framework para React. 
- [MaterialUi](https://mui.com/material-ui/) | Biblioteca de componentes de estilo para React.
- [Axios](https://axios-http.com/ptbr/docs/api_intro) | Biblioteca em JavaScript que lida com requisições HTTP.
- [Express](https://expressjs.com/pt-br/) | Framework para nodejs
- [Cookie-Parse](https://www.npmjs.com/package/cookie-parser) | Middleware para transmissão de Token de forma segura.

O Next.js é um framework de desenvolvimento web para React.js que simplifica e acelera a criação de aplicativos web modernos. Ele oferece recursos poderosos, como roteamento automático, pré-renderização, carregamento otimizado de páginas, suporte a CSS modular, entre outros.O Material-UI fornece uma variedade de componentes reutilizáveis, como botões, barras de navegação, caixas de diálogo, entre outros, que seguem as diretrizes visuais e de interação do Material Design. O Axios é uma biblioteca popular em JavaScript, geralmente utilizada em ambientes de navegador ou em Node.js, para fazer requisições HTTP. Ele fornece uma interface fácil de usar para realizar solicitações tanto para servidores HTTP como para APIs. O Express é um framework para o Node.js que permite construir aplicações web robustas e escaláveis de forma mais fácil e rápida. O cookie-parser oferece recursos de segurança, como a capacidade de assinar cookies. Isso ajuda a garantir a integridade dos dados armazenados nos cookies, prevenindo a manipulação por parte do cliente.

## Instalação e Execução
### Download do projeto
```
git clone git@github.com:JonathanProjetos/Uaitay-Back.git
```

### Arquivo env
- Dentro da pasta Uaitay-Back, existe o arquivo .env.example. Nele, será necessário remover o .example caso queira executar na máquina local. O arquivo .env já contém um exemplo funcional de uso.


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
