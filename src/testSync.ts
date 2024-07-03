import sequelize from './config/database';
import Carro from './models/Carro';

(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Modelo Carro sincronizado com sucesso.');
  } catch (error) {
    console.error('Não foi possível sincronizar o modelo Carro:', error);
  } finally {
    process.exit();
  }
})();
