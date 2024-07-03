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

export default router;
