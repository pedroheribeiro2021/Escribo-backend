# Escribo - CRUD

Este projeto é uma aplicação de CRUD de usuários.

**Como executar o projeto:**

Para baixar o projeto, você precisará ter instalado em sua máquina as seguintes ferramentas: Git, Node.js, PostgreSQL e Yarn para gerenciar pacotes. Além disso, é bom ter um editor para trabalhar com o um editor de texto como VSCode.

1 - Clone o repositório para sua máquina local.
2 - Execute o comando yarn install para instalar as dependências.
3 - Crie um arquivo .env na raiz da pasta e configure as variáveis de ambiente com a URL para acesso ao banco de dados onde deverá ter seu login e senha do postgres conforme o arquivo env.example.
4 - Crie um banco de dados para o projeto.
5 - Execute o comando: "yarn typeorm migration:generate src/migrations/(NOME-DA-MIGRATION) -d src/data-source.ts" para criar o arquivo de migração para o banco de dados.
6 - Execute o comando: "yarn typeorm migration:run -d src/data-source.ts" para rodar as migração e persistir no banco de dados.
7 - No terminal bash execute o comando "yarn dev"
8 - Pronto! A aplicação estará rodando em http://localhost:3003.

# API

Bem-vindo à documentação da API!

## Endpoints

### 1. Criar Usuário

- **Método:** `POST`
- **URL:** `http://localhost:3003/user`
- **Payload de Exemplo:**
  ```json
  {
    "name": "pedro",
    "email": "pedro@mail.com",
    "password": "123456",
    "phones": [{"phone": "992514712", "ddd": "61"}]
  }

### 2. Autenticar Usuário

- **Método:** `POST`
- **URL:** `http://localhost:3003/login`
- **Payload de Exemplo:**
  ```json
  {
    "email": "pedro@mail.com",
    "password": "123456",
  }

### 3. Listar Usuários

- **Método:** `GET`
- **URL:** `http://localhost:3003/user`

### 4. Atualizar Usuário

- **Método:** `PATCH`
- **URL:** `http://localhost:3003/user/:userId`
- **Qualquer campo pode ser atualizado ou não**
- **Payload de Exemplo:**
  ```json
  {
    "email": "novoemail@mail.com",
  }

### 5. Excluir Usuário

- **Método:** `DELETE`
- **URL:** `http://localhost:3003/user/:userId`

# Observações:

1 - Para realizar ações de leitura (listar usuários), é necessário incluir o token de autenticação no header da requisição.

2 - Para atualizar ou excluir um usuário, é necessário estar autenticado e ser o próprio usuário que está sendo atualizado ou excluído.

3 - Certifique-se de armazenar o token de autenticação recebido no login para utilizá-lo nas requisições subsequentes.

4 - Todos os endpoints que requerem autenticação devem incluir o header Authorization: Bearer seu-token-de-autenticacao.