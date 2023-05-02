import { Router } from "express";
import {
  getServices,
  createService,
  updateService,
  deleteService,
} from "../controllers/services.controller.js";

const router = Router();

router.get("/services", getServices);
router.post("/services", createService);
router.delete("/services/:id", deleteService);
router.put("/services/:id", updateService);

export default router;
