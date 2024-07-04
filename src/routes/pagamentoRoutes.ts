import { Router } from 'express';
import Pagamento from '../models/Pagamento';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { valor, dataPagamento, metodo, status } = req.body;
    const novoPagamento = await Pagamento.create({ valor, dataPagamento, metodo, status });
    res.status(201).json(novoPagamento);
  } catch (error: any) {
    console.error('Erro ao criar pagamento:', error);
    res.status(500).json({ error: error.message });
  }
});


router.get('/', async (req, res) => {
  try {
    const pagamentos = await Pagamento.findAll();
    res.status(200).json(pagamentos);
  } catch (error: any) {
    console.error('Erro ao listar pagamentos:', error);
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const pagamento = await Pagamento.findByPk(id);
    if (pagamento) {
      res.status(200).json(pagamento);
    } else {
      res.status(404).json({ error: 'Pagamento não encontrado' });
    }
  } catch (error: any) {
    console.error('Erro ao obter pagamento:', error);
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { valor, dataPagamento, metodo, status } = req.body;
    const pagamento = await Pagamento.findByPk(id);
    if (pagamento) {
      await pagamento.update({ valor, dataPagamento, metodo, status });
      res.status(200).json(pagamento);
    } else {
      res.status(404).json({ error: 'Pagamento não encontrado' });
    }
  } catch (error: any) {
    console.error('Erro ao atualizar pagamento:', error);
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const pagamento = await Pagamento.findByPk(id);
    if (pagamento) {
      await pagamento.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Pagamento não encontrado' });
    }
  } catch (error: any) {
    console.error('Erro ao deletar pagamento:', error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
