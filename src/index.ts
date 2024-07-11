import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/routes';
import sequelize from './config/database';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(routes);


app.get('/', (req, res) => {
  res.send('Bem-vindo ao sistema de aluguel de carros!');
});

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
