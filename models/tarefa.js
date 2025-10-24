/*
CREATE TABLE `tarefa` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT,
  `titulo` varchar(100),
  `descricao` text,
  `data` date,
  `status` tinyint(1) DEFAULT 0
);
*/
import db from '../database/database.js';
const criarTarefa = async (tarefa) => {
  console.log('Criando tarefa:', tarefa);
  const [result] = await db.query('INSERT INTO tarefa SET ?', tarefa);
  return result.insertId;
};

const buscarTarefas = async () => {
  const [rows] = await db.query('SELECT * FROM tarefa');
  console.log('Tarefas encontradas:', rows);
  return rows;
};

const atualizarTarefa = async (id, tarefa) => {
  await db.query('UPDATE tarefa SET ? WHERE id = ?', [tarefa, id]);
  console.log('Tarefa atualizada:', { id, ...tarefa });
};

const deletarTarefa = async (id) => {
  await db.query('DELETE FROM tarefa WHERE id = ?', id);
};
const buscarTarefaPorId = async (id) => {
  const [rows] = await db.query('SELECT * FROM tarefa WHERE id = ?', id);
  return rows[0];
};
const buscarTarefasPorStatus = async (status) => {
  const [rows] = await db.query('SELECT * FROM tarefa WHERE status = ?', status);
  return rows;
};
const buscarTarefasPorData = async (data) => {
  const [rows] = await db.query('SELECT * FROM tarefa WHERE data = ?', data);
  return rows;
};
const filtrarTarefas = async (titulo, descricao) => {
  const [rows] = await db.query('SELECT * FROM tarefa WHERE titulo LIKE ? OR descricao LIKE ?', [`%${titulo}%`, `%${descricao}%`]);
  return rows;
};
 
const marcarTarefaComoConcluida = async (id) => {
  await db.query('UPDATE tarefa SET status = 1 WHERE id = ?', id);
};

export default {
  criarTarefa, 
  buscarTarefas,
  atualizarTarefa,
  deletarTarefa,
  buscarTarefaPorId,
  buscarTarefasPorStatus,
  buscarTarefasPorData,
  filtrarTarefas,
  marcarTarefaComoConcluida
};