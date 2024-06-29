import { Sequelize } from 'sequelize';

// Configuração de conexão
const sequelize = new Sequelize('aluguel_de_carros', 'Anderson', '123456', {
    host: 'localhost',
    dialect: 'postgres',
});

export default sequelize;