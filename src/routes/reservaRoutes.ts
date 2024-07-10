import { Router } from 'express';
import Reserva from '../models/Reserva';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { dataInicio, dataFim, status, clienteId, carroId } = req.body;
    const novaReserva = await Reserva.create({ dataInicio, dataFim, status, clienteId, carroId });
    res.status(201).json(novaReserva);
  } catch (error: any) {
    console.error('Erro ao criar reserva:', error);
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const reservas = await Reserva.findAll();
    res.status(200).json(reservas);
  } catch (error: any) {
    console.error('Erro ao listar reservas:', error);
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const reserva = await Reserva.findByPk(id);
    if (reserva) {
      res.status(200).json(reserva);
    } else {
      res.status(404).json({ error: 'Reserva não encontrada' });
    }
  } catch (error: any) {
    console.error('Erro ao obter reserva:', error);
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { dataInicio, dataFim, status, clienteId, carroId } = req.body;
    const reserva = await Reserva.findByPk(id);
    if (reserva) {
      await reserva.update({ dataInicio, dataFim, status, clienteId, carroId });
      res.status(200).json(reserva);
    } else {
      res.status(404).json({ error: 'Reserva não encontrada' });
    }
  } catch (error: any) {
    console.error('Erro ao atualizar reserva:', error);
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const reserva = await Reserva.findByPk(id);
    if (reserva) {
      await reserva.destroy();
      res.status(204).send();
    } else {
      console.warn(`Reserva com id ${id} não encontrada para excluir`);
      res.status(404).json({ error: 'Reserva não encontrada' });
    }
  } catch (error: any) {
    console.error('Erro ao deletar reserva:', error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
