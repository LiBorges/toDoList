# ToDo List - API + Frontend

Este projeto é uma aplicação de lista de tarefas (ToDo List) com backend em Node.js (Express + MySQL) e frontend divertido com ícones FontAwesome.

---

## Como rodar o projeto

1. **Clone o repositório e instale as dependências:**
   ```sh
   yarn init -y
   ```

2. **Configure o banco de dados MySQL:**
   - Crie o banco de dados `tarefas` e a tabela:
     ```sql
     CREATE DATABASE tarefas;
     USE tarefas;
     CREATE TABLE tarefa (
       id INT PRIMARY KEY AUTO_INCREMENT,
       titulo VARCHAR(100),
       descricao TEXT,
       data DATE,
       status TINYINT(1) DEFAULT 0
     );
     ```

3. **Inicie o servidor:**
   ```sh
   yarn dev
   ```
   O servidor rodará em `http://localhost:3000/`.

4. **Acesse o frontend:**
   - Abra `http://localhost:3000/` no navegador.

---

## Estrutura de Pastas

```
toDoList/
│
├── app.js
├── package.json
├── README.MD
│
├── controllers/
│   └── tarefaController.js
├── models/
│   └── tarefa.js
├── routes/
│   └── tarefasRoutes.js
├── database/
│   └── database.js
│
└── public/
    ├── index.html
    ├── css/
    │   └── style.css
    └── js/
        └── app.js
```

---

## Documentação das Rotas da API

Base URL: `http://localhost:3000/tarefas`

### 1. Criar Tarefa
- **POST** `/`
- **Body:**  
  ```json
  {
    "titulo": "string",
    "descricao": "string",
    "data": "YYYY-MM-DD",
    "status": 0
  }
  ```
- **Resposta:**  
  `201 Created`
  ```json
  {
    "id": 1,
    "titulo": "...",
    "descricao": "...",
    "data": "...",
    "status": 0
  }
  ```

---

### 2. Listar Todas as Tarefas
- **GET** `/`
- **Resposta:**  
  `200 OK`
  ```json
  [
    { "id": 1, "titulo": "...", "descricao": "...", "data": "...", "status": 0 },
    ...
  ]
  ```

---

### 3. Buscar Tarefa por ID
- **GET** `/:id`
- **Resposta:**  
  `200 OK`
  ```json
  { "id": 1, "titulo": "...", "descricao": "...", "data": "...", "status": 0 }
  ```
  ou  
  `404 Not Found`
  ```json
  { "error": "Tarefa não encontrada" }
  ```

---

### 4. Atualizar Tarefa
- **PUT** `/:id`
- **Body:**  
  ```json
  {
    "titulo": "string",
    "descricao": "string",
    "data": "YYYY-MM-DD",
    "status": 0
  }
  ```
- **Resposta:**  
  `200 OK`
  ```json
  { "id": 1, "titulo": "...", "descricao": "...", "data": "...", "status": 0 }
  ```

---

### 5. Deletar Tarefa
- **DELETE** `/:id`
- **Resposta:**  
  `204 No Content`

---

### 6. Buscar Tarefas por Status
- **GET** `/status/:status`
- **Exemplo:** `/status/1` (tarefas concluídas)
- **Resposta:**  
  `200 OK`
  ```json
  [
    { "id": 2, "titulo": "...", "descricao": "...", "data": "...", "status": 1 },
    ...
  ]
  ```

---

### 7. Buscar Tarefas por Data
- **GET** `/data/:data`
- **Exemplo:** `/data/2025-08-26`
- **Resposta:**  
  `200 OK`
  ```json
  [
    { "id": 3, "titulo": "...", "descricao": "...", "data": "2025-08-26", "status": 0 },
    ...
  ]
  ```

---

### 8. Filtrar Tarefas por Título e/ou Descrição
- **GET** `/filtro?titulo=...&descricao=...`
- **Exemplo:** `/filtro?titulo=mercado`
- **Resposta:**  
  `200 OK`
  ```json
  [
    { "id": 4, "titulo": "Ir ao mercado", "descricao": "...", "data": "...", "status": 0 },
    ...
  ]
  ```

---

### 9. Marcar Tarefa como Concluída
- **PATCH** `/:id/concluir`
- **Resposta:**  
  `200 OK`
  ```json
  { "message": "Tarefa marcada como concluída" }
  ```

---

## Frontend

O frontend está em `/public/index.html` e consome a API usando JavaScript puro e ícones FontAwesome.

- Para adicionar, concluir ou remover tarefas, utilize os botões e formulários da interface.
- Os ícones deixam a experiência mais divertida e visual!
