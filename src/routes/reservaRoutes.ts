import { Router } from 'express';
import Reserva from '../models/Reserva';
import Cliente from '../models/Cliente';
import Carro from '../models/Carro';

const router = Router();

// Rota para criar uma reserva
router.post('/', async (req, res) => {
  try {
    const { dataInicio, dataFim, status, clienteId, carroId } = req.body;
    const novoReserva = await Reserva.create({ dataInicio, dataFim, status, clienteId, carroId });
    res.status(201).json(novoReserva);
  } catch (error: any) {
    console.error('Erro ao criar reserva:', error);
    res.status(500).json({ error: error.message });
  }
});

// Rota para listar todas as reservas
router.get('/', async (req, res) => {
  try {
    const reservas = await Reserva.findAll({
      include: [
        { model: Cliente, attributes: ['nome', 'email'] },
        { model: Carro, attributes: ['marca', 'modelo'] },
      ]
    });
    res.status(200).json(reservas);
  } catch (error: any) {
    console.error('Erro ao listar reservas:', error);
    res.status(500).json({ error: error.message });
  }
});

// Rota para obter uma reserva específica
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const reserva = await Reserva.findByPk(id, {
      include: [
        { model: Cliente, attributes: ['nome', 'email'] },
        { model: Carro, attributes: ['marca', 'modelo'] },
      ]
    });
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

// Rota para atualizar uma reserva específica
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

// Rota para deletar uma reserva específica
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const reserva = await Reserva.findByPk(id);
    if (reserva) {
      await reserva.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Reserva não encontrada' });
    }
  } catch (error: any) {
    console.error('Erro ao deletar reserva:', error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
