import tarefaModel from '../models/tarefa.js';

const criarTarefa = async (req, res) => {
  try {
    const tarefa = req.body;
    const id = await tarefaModel.criarTarefa(tarefa);
    res.status(201).json({ id, ...tarefa });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar tarefa' });
  }
};

const buscarTarefas = async (req, res) => {
  try {
    const tarefas = await tarefaModel.buscarTarefas();
    res.status(200).json(tarefas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar tarefas' });
  }
};

const buscarTarefaPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const tarefa = await tarefaModel.buscarTarefaPorId(id);
    if (tarefa) {
      res.status(200).json(tarefa);
    } else {
      res.status(404).json({ error: 'Tarefa não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar tarefa' });
  }
};

const atualizarTarefa = async (req, res) => {
  try {
    const { id } = req.params;
    const tarefa = req.body;
    await tarefaModel.atualizarTarefa(id, tarefa);
    res.status(200).json({ id, ...tarefa });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar tarefa' });
  }
};

const deletarTarefa = async (req, res) => {
  try {
    const { id } = req.params;
    console.log('ID da tarefa a ser deletada:', req.params.id);
    await tarefaModel.deletarTarefa(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar tarefa' });
  }
};

const buscarTarefasPorStatus = async (req, res) => {
  try {
    const { status } = req.params;
    const tarefas = await tarefaModel.buscarTarefasPorStatus(status);
    res.status(200).json(tarefas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar tarefas por status' });
  }
};

const buscarTarefasPorData = async (req, res) => {
  try {
    const { data } = req.params;
    const tarefas = await tarefaModel.buscarTarefasPorData(data);
    res.status(200).json(tarefas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar tarefas por data' });
  }
};

const filtrarTarefas = async (req, res) => {
  try {
    const { pesquisa } = req.query;
    const tarefas = await tarefaModel.filtrarTarefas(pesquisa, pesquisa);
    res.status(200).json(tarefas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao filtrar tarefas' });
  }
};

const marcarTarefaComoConcluida = async (req, res) => {
  try {
    const { id } = req.params;
    await tarefaModel.marcarTarefaComoConcluida(id);
    res.status(200).json({ message: 'Tarefa marcada como concluída' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao marcar tarefa como concluída' });
  }
};

export default {
  criarTarefa,
  buscarTarefas,
  buscarTarefaPorId,
  atualizarTarefa,
  deletarTarefa,
  buscarTarefasPorStatus,
  buscarTarefasPorData,
  filtrarTarefas,
  marcarTarefaComoConcluida
};