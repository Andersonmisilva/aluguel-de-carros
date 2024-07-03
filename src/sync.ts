import sequelize from './config/database';
import Carro from './models/Carro';
import Cliente from './models/Cliente';
import Reserva from './models/Reserva';
import Pagamento from './models/Pagamento';

(async () => {
  try {
    console.log('Iniciando sincronização...');
    await sequelize.sync({ force: true });
    console.log('Todos os modelos foram sincronizados com sucesso.');
  } catch (error) {
    console.error('Não foi possível sincronizar os modelos:', error);
  } finally {
    process.exit();
  }
})();
