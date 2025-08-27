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

export const criarTarefa = async (tarefa) => {
  const [result] = await db.query('INSERT INTO tarefa SET ?', tarefa);
  return result.insertId;
};

export const buscarTarefas = async () => {
  const [rows] = await db.query('SELECT * FROM tarefa');
  return rows;
};

export const atualizarTarefa = async (id, tarefa) => {
  await db.query('UPDATE tarefa SET ? WHERE id = ?', [tarefa, id]);
};

export const deletarTarefa = async (id) => {
  await db.query('DELETE FROM tarefa WHERE id = ?', id);
};
export const buscarTarefaPorId = async (id) => {
  const [rows] = await db.query('SELECT * FROM tarefa WHERE id = ?', id);
  return rows[0];
};
export const buscarTarefasPorStatus = async (status) => {
  const [rows] = await db.query('SELECT * FROM tarefa WHERE status = ?', status);
  return rows;
};
export const buscarTarefasPorData = async (data) => {
  const [rows] = await db.query('SELECT * FROM tarefa WHERE data = ?', data);
  return rows;
};
export const filtrarTarefas = async (titulo, descricao) => {
  const [rows] = await db.query('SELECT * FROM tarefa WHERE titulo LIKE ? OR descricao LIKE ?', [`%${titulo}%`, `%${descricao}%`]);
  return rows;
};
 
export const marcarTarefaComoConcluida = async (id) => {
  await db.query('UPDATE tarefa SET status = 1 WHERE id = ?', id);
};