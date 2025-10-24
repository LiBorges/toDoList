/*
CREATE TABLE `tarefa` (
  `id` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `descricao` text NOT NULL,
  `data` date NOT NULL,
  `status` tinyint(1) NOT NULL
)
*/
import http from 'http'; // Importa o módulo nativo HTTP do Node.js
import express from 'express'; // Importa o framework Express para facilitar a criação do servidor
import bodyParser from 'body-parser'; // Importa o body-parser para interpretar JSON no corpo das requisições
import cors from 'cors'; // Importa o CORS para permitir requisições de outros domínios
import tarefaRoutes from './routes/tarefasRoutes.js'; // Importa as rotas relacionadas às tarefas

const app = express(); // Cria uma instância do Express
app.use(bodyParser.json()); // Configura o Express para aceitar JSON no corpo das requisições
app.use(cors()); // Habilita o CORS para todas as rotas
const port = 3000; // Define a porta onde o servidor irá rodar
app.use(express.static('public')); // Serve arquivos estáticos da pasta public
app.use('/tarefas', tarefaRoutes); // Usa as rotas de tarefas no caminho /tarefas
app.get('/', (req, res) => {
  res.sendFile('public/index.html', { root: '.' }); // Quando acessar /, envia o arquivo index.html da pasta public
});
const server = http.createServer(app); // Cria o servidor HTTP usando o Express
server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`); // Exibe mensagem informando que o servidor está rodando
});