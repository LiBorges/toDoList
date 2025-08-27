/*
CREATE TABLE `tarefa` (
  `id` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `descricao` text NOT NULL,
  `data` date NOT NULL,
  `status` tinyint(1) NOT NULL
)
*/
import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import tarefaRoutes from './routes/tarefasRoutes.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 3000;

app.use('/tarefas', tarefaRoutes);
app.get('/', (req, res) => {
  res.sendFile('public/index.html', { root: '.' });
});
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});