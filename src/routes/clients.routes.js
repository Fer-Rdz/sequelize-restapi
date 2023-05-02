import { Router } from "express";
import {
  getClients,
  getClientsByEmail,
  createClient,
  updateClient,
  deleteClient,
} from "../controllers/clients.controller.js";

const router = Router();

router.get("/clients", getClients);
router.get("/clients/:email", getClientsByEmail);
router.post("/clients", createClient);
router.delete("/clients/:id", deleteClient);
router.put("/clients/:id", updateClient);

export default router;
