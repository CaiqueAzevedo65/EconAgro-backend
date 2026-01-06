# EconAgro - Backend

Backend da aplicação EconAgro, uma plataforma para gerenciamento de produtos agrícolas.

## 🚀 Começando

### 🛠️ Pré-requisitos

- Node.js (v14 ou superior)
- npm ou yarn
- MySQL 5.7 ou superior
- Servidor MySQL em execução

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/econagro.git
   cd econagro/backend
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn
   ```

3. Configure as variáveis de ambiente:
   ```bash
   cp .env.example .env
   ```
   
   Edite o arquivo `.env` com as configurações do seu banco de dados MySQL:
   ```
   # Configurações do Banco de Dados
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
   DB_NAME=econagro_dev
   DB_HOST=localhost
   DB_PORT=3306
   
   # Outras configurações
   NODE_ENV=development
   PORT=3001
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

   O servidor estará disponível em `http://localhost:3001`

## 🛠️ Comandos Úteis

- `npm run dev` - Inicia o servidor em modo de desenvolvimento
- `npm test` - Executa os testes
- `npm run lint` - Verifica problemas de estilo de código
- `npm run lint:fix` - Corrige automaticamente problemas de estilo
- `npm run migrate` - Executa as migrações do banco de dados
- `npm run migrate:reset` - Reseta e executa todas as migrações novamente
- `npm run migrate:undo` - Desfaz a última migração
- `npm run seed` - Popula o banco de dados com dados de exemplo

## 🗄️ Configuração do Banco de Dados

O projeto está configurado para usar o MySQL. Certifique-se de ter um servidor MySQL em execução e um banco de dados criado antes de iniciar a aplicação.

### Criando o banco de dados

```sql
CREATE DATABASE econagro_dev CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```
# Configurações do Banco de Dados
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=econagro_dev
DB_HOST=localhost
DB_PORT=3306

# Outras configurações
NODE_ENV=development
PORT=3001
```

## 📚 Documentação da API

A documentação da API está disponível em `/api-docs` quando o servidor estiver em execução.

## 🏗️ Estrutura do Projeto

```
backend/
├── src/
│   ├── config/         # Configurações da aplicação
│   ├── controllers/    # Controladores das rotas
│   ├── middlewares/    # Middlewares
│   ├── models/         # Modelos do banco de dados
│   ├── routes/         # Definições de rotas
│   ├── utils/          # Utilitários
│   ├── app.js          # Configuração do Express
│   └── server.js       # Ponto de entrada da aplicação
├── .env.example        # Exemplo de variáveis de ambiente
├── .gitignore          # Arquivos ignorados pelo Git
└── package.json        # Dependências e scripts
```

## 🛡️ Segurança

- Validação de entrada em todas as rotas
- Tratamento de erros centralizado
- Headers de segurança configurados
- Rate limiting (se necessário)

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 📦 API EconAgro - Backend

API RESTful para o sistema EconAgro, desenvolvida com Node.js, Express e MongoDB.

## 🚀 Tecnologias

- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework web para Node.js
- **MongoDB** - Banco de dados NoSQL
- **Mongoose** - ODM para MongoDB
- **ESLint** - Linter para manter a qualidade do código
- **Prettier** - Formatador de código

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- MongoDB (local ou Atlas)
- npm ou yarn

## 🛠️ Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/econagro-backend.git
   cd econagro-backend
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
   ```env
   NODE_ENV=development
   PORT=3001
   MONGODB_URI=sua_string_de_conexao_mongodb
   JWT_SECRET=seu_segredo_jwt
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

   O servidor estará disponível em `http://localhost:3001`

## 🚀 Rotas da API

### Categorias

- `GET /api/categories` - Lista todas as categorias
- `GET /api/categories/:id` - Obtém uma categoria específica
- `POST /api/categories` - Cria uma nova categoria
- `PUT /api/categories/:id` - Atualiza uma categoria existente
- `DELETE /api/categories/:id` - Remove uma categoria

### Produtos

- `GET /api/products` - Lista todos os produtos
- `GET /api/products/:id` - Obtém um produto específico
- `GET /api/products/category/:categoryName` - Lista produtos por categoria
- `POST /api/products` - Cria um novo produto
- `PUT /api/products/:id` - Atualiza um produto existente
- `DELETE /api/products/:id` - Remove um produto

## 🛠️ Comandos Úteis

- `npm run dev` - Inicia o servidor em modo de desenvolvimento
- `npm run lint` - Verifica problemas de estilo de código
- `npm run lint:fix` - Corrige automaticamente problemas de estilo

## 🗄️ Estrutura do Projeto

```
src/
├── config/           # Configurações do banco de dados e outras configurações
├── controllers/       # Lógica dos controladores
├── middlewares/       # Middlewares personalizados
├── models/            # Modelos do MongoDB
├── routes/            # Definições de rotas
├── utils/             # Utilitários e helpers
├── validators/        # Validações de entrada
├── app.js             # Configuração do Express
└── server.js          # Ponto de entrada da aplicação
```

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido por [Seu Nome] - [Seu Email]
