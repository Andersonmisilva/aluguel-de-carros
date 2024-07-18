import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Pagamento extends Model {}

Pagamento.init({
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  dataPagamento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  metodo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'pendente',
  },
}, {
  sequelize,
  modelName: 'Pagamento',
  tableName: 'pagamentos',
});


export default Pagamento;
