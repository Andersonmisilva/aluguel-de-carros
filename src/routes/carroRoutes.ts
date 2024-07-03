import { Router } from 'express';
import Carro from '../models/Carro';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { marca, modelo, ano, disponibilidade } = req.body;
    const novoCarro = await Carro.create({ marca, modelo, ano, disponibilidade });
    res.status(201).json(novoCarro);
  } catch (error: any) {
    console.error('Erro ao criar carro:', error);
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const carros = await Carro.findAll();
    res.status(200).json(carros);
  } catch (error: any) {
    console.error('Erro ao listar carros:', error);
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const carro = await Carro.findByPk(id);
    if (carro) {
      res.status(200).json(carro);
    } else {
      res.status(404).json({ error: 'Carro não encontrado' });
    }
  } catch (error: any) {
    console.error('Erro ao obter carro:', error);
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { marca, modelo, ano, disponibilidade } = req.body;
    const carro = await Carro.findByPk(id);
    if (carro) {
      await carro.update({ marca, modelo, ano, disponibilidade });
      res.status(200).json(carro);
    } else {
      res.status(404).json({ error: 'Carro não encontrado' });
    }
  } catch (error: any) {
    console.error('Erro ao atualizar carro:', error);
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const carro = await Carro.findByPk(id);
    if (carro) {
      await carro.destroy();
      res.status(204).send();
    } else {
      console.warn(`Carro com id ${id} não encontrado para excluir`);
      res.status(404).json({ error: 'Carro não encontrado' });
    }
  } catch (error: any) {
    console.error('Erro ao deletar carro:', error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
