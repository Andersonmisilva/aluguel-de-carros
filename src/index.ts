import express from 'express';
import dotenv from 'dotenv';
import carroRoutes from './routes/carroRoutes';
import clienteRoutes from './routes/clienteRoutes';
import pagamentoRoutes from './routes/pagamentoRoutes';
import reservaRoutes from './routes/reservaRoutes';
import sequelize from './config/database';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/carros', carroRoutes);
app.use('/clientes', clienteRoutes);
app.use('/pagamentos', pagamentoRoutes);
app.use('/reservas', reservaRoutes);

app.get('/', (req, res) => {
  res.send('Bem-vindo ao sistema de aluguel de carros!');
});

// Função para testar a conexão com o banco de dados
async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados foi estabelecida com sucesso.');
  } catch (error: any) {
    console.error('Não foi possível conectar ao banco de dados:', error.message);
  }
}

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
  testDatabaseConnection();
});
