"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
(async () => {
    try {
        await database_1.default.sync({ force: true });
        console.log('Todos os modelos foram sincronizados com sucesso.');
    }
    catch (error) {
        console.error('Não foi possível sincronizar os modelos:', error);
    }
    finally {
        process.exit();
    }
})();
