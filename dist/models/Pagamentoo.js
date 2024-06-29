"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class Pagamento extends sequelize_1.Model {
}
Pagamento.init({
    valor: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    dataPagamento: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    metodo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: 'pendente',
    },
}, {
    sequelize: database_1.default,
    modelName: 'Pagamento',
    tableName: 'pagamentos',
});
exports.default = Pagamento;
