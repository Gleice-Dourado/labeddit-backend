# API Labeddit

![API-Documentation](./src/assets/documentation.png)

API para gerenciar o banco de dados de uma rede social, que inclui informações de usuários e postagens.
Para os usuários, a API permite se cadastrar como um novo usuário, fazer login como um usuário existente e obter informações de todos os usuários se a conta for do tipo "ADMIN".
Para as postagens, a API permite criar, buscar, editar, excluir, curtir/não curtir e comentar as postagens existentes no banco de dados.

[Documentação]( )

[Repositório front-end](https://github.com/Gleice-Dourado/labeddit-frontend.git)

## Index
- <a href="#funcionalidades">Funcionalidades da Aplicação</a>
- <a href="#execucao">Como Executar a Aplicação</a>
<a href="#endpoints">Endpoints da Aplicação</a>
- <a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a>
- <a href="#desenvolvedor">Desenvolvedor(a)</a>

## Funcionalidades da Aplicação
 - [x]  Signup  
 - [x]  Login
 - [x]  Get all users
 - [x]  Create post
 - [x]  Get all posts 
 - [x]  Edit post by id
 - [x]  Delete post by id
 - [x]  Like post by id
 - [x]  Dislike post by id
 - [x]  Comment post by id
  

## Como Executar a Aplicação
```bash
# Clone este repositório
$ git clone linkdorepo

# Acesse a pasta do aplicativo no seu terminal
$ cd minha-rede

# Instale as dependências
$ npm install

# Execute o aplicativo 
$ npm run dev

# Use sua ferramenta de teste de API preferida para executar a aplicação
```

## Endpoints da Aplicação

1. Endpoints for the users table:
 - Get all users: 
    - app.get => 'https://labeddit-back-jsboz.onrender.com/users';
 - Signup
    - app.post => 'https://labeddit-back-jsboz.onrender.com/users/signup';
 - Login
    - app.post => 'https://labeddit-back-jsboz.onrender.com/users/login'

2. Endpoints for the posts table:
 - Create post
    - app.post => 'https://labeddit-back-jsboz.onrender.com/posts';
 - Get all posts
    - app.get => 'https://labeddit-back-jsboz.onrender.com/posts';
 - Edit post by id
    - app.put =>'https://labeddit-back-jsboz.onrender.com/posts/:id';
 - Delete post by id
    - app.delete => 'https://labeddit-back-jsboz.onrender.com/posts/:id';
 - Like and dislike post by id
    - app.put => 'https://labeddit-back-jsboz.onrender.com/posts/:id/like';
 - Comment a post by id
    -   app.post => 'https://labeddit-back-jsboz.onrender.com/posts/:id/comment'

## Tecnologias usadas
1. TypeScript
2. [Node.js](https://nodejs.org/en)
3. [Express](https://expressjs.com/pt-br/)
4. SQL
5. [SQLite](https://www.sqlite.org/index.html)
6. [Knex](https://knexjs.org/)
7. Object-Oriented Programming (OOP)
8. [UUID](https://www.uuidgenerator.net/)
9. [Zod](https://zod.dev/)
10. [Json Web Token](https://jwt.io/)
11. Layered Architecture

## Desenvolvedor(a)
[LinkedIn](https://www.linkedin.com/in/gleicielen-dourado/)

