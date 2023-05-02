import { Router } from "express";
import {
  getBookings,
  deleteBooking,
  createBooking,
} from "../controllers/bookings.controller";

const router = Router();

router.get("/bookings", getClients);
router.get("/bookings/:email", getClientsByEmail);
router.post("/bookings", createClient);
router.delete("/bookings/:id", deleteClient);
router.put("/bookings/:id", updateClient);

export default router;
