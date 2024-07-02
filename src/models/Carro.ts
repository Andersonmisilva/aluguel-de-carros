import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Carro extends Model {}

Carro.init({
  marca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  modelo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ano: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  disponibilidade: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  sequelize,
  modelName: 'Carro',
  tableName: 'carros',
});

export default Carro;
