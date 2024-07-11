import express from "express";

import carroRoutes from "./carroRoutes";
import clienteRoutes from "./clienteRoutes";
import pagamentoRoutes from "./pagamentoRoutes";
import reservaRoutes from "./reservaRoutes";

const router = express.Router();

router.use("/carros", carroRoutes);
router.use("clientes", clienteRoutes);
router.use("/pagamentos", pagamentoRoutes);
router.use("reservas", reservaRoutes);

export default router;
