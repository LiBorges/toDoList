import http from 'http'; // Importa o módulo nativo HTTP do Node.js
import express from 'express'; // Importa o framework Express para facilitar a criação do servidor
import dotenv from 'dotenv'; // Importa o dotenv para carregar variáveis de ambiente
import cors from 'cors'; // Importa o CORS para permitir requisições de outros domínios
import tarefaRoutes from './routes/tarefasRoutes.js'; // Importa as rotas relacionadas às tarefas

dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env
const app = express(); // Cria uma instância do Express
const port = process.env.PORTA; // Define a porta onde o servidor irá rodar
app.use(express.json()); // Habilita o parsing de JSON no corpo das requisições
app.use(cors()); // Habilita o CORS para todas as rotas
app.use(express.static('public')); // Serve arquivos estáticos da pasta public
app.use('/tarefas', tarefaRoutes); // Usa as rotas de tarefas no caminho /tarefas
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: './public' }); // Quando acessar /, envia o arquivo index.html da pasta public
});
const server = http.createServer(app); // Cria o servidor HTTP usando o Express
server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`); // Exibe mensagem informando que o servidor está rodando
});