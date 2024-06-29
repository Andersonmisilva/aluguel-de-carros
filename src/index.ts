import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/database'; // Supondo que o arquivo de configuração do Sequelize seja database.js

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bem-vindo ao sistema de aluguel de carros!');
});

// Função para testar a conexão com o banco de dados
async function testDatabaseConnection() {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados foi estabelecida com sucesso.');
    } catch (error) {
        console.error('Não foi possível conectar ao banco de dados:', error);
    }
}

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
  testDatabaseConnection(); 
});
