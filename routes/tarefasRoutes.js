import express from 'express';
import tarefaController from '../controllers/tarefaController.js';

const router = express.Router();

router.post('/', tarefaController.criarTarefa);
router.get('/', tarefaController.buscarTarefas);
router.get('/status/:status', tarefaController.buscarTarefasPorStatus);
router.get('/data/:data', tarefaController.buscarTarefasPorData);
router.get('/filtro', tarefaController.filtrarTarefas);
router.get('/:id', tarefaController.buscarTarefaPorId);
router.put('/:id', tarefaController.atualizarTarefa);
router.delete('/:id', tarefaController.deletarTarefa);
router.patch('/:id/concluir', tarefaController.marcarTarefaComoConcluida);

export default router;