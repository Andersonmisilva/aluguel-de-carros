import { Router } from 'express';
import Cliente from '../models/Cliente';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { nome, email, senha, telefone } = req.body;
    const novoCliente = await Cliente.create({ nome, email, senha, telefone });
    res.status(201).json(novoCliente);
  } catch (error: any) {
    console.error('Erro ao criar cliente:', error);
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.status(200).json(clientes);
  } catch (error: any) {
    console.error('Erro ao listar clientes:', error);
    res.status(500).json({ error: error.message });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await Cliente.findByPk(id);
    if (cliente) {
      res.status(200).json(cliente);
    } else {
      res.status(404).json({ error: 'Cliente não encontrado' });
    }
  } catch (error: any) {
    console.error('Erro ao obter cliente:', error);
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email, senha, telefone } = req.body;
    const cliente = await Cliente.findByPk(id);
    if (cliente) {
      await cliente.update({ nome, email, senha, telefone });
      res.status(200).json(cliente);
    } else {
      res.status(404).json({ error: 'Cliente não encontrado' });
    }
  } catch (error: any) {
    console.error('Erro ao atualizar cliente:', error);
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await Cliente.findByPk(id);
    if (cliente) {
      await cliente.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Cliente não encontrado' });
    }
  } catch (error: any) {
    console.error('Erro ao deletar cliente:', error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
