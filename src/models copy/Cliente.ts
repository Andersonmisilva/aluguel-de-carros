import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Cliente extends Model {}

Cliente.init({
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Cliente',
  tableName: 'clientes',
});

export default Cliente;
