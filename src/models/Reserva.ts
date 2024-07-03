import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Cliente from './Cliente';
import Carro from './Carro';

class Reserva extends Model {}

Reserva.init({
  dataInicio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dataFim: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'pendente',
  },
}, {
  sequelize,
  modelName: 'Reserva',
  tableName: 'reservas',
});


export default Reserva;
