import { Router } from "express";
import {
  getBookings,
  deleteBooking,
  createBooking,
  getBookingById,
} from "../controllers/bookings.controller.js";

const router = Router();

router.get("/bookings", getBookings);
router.get("/bookings/:id", getBookingById);
router.post("/bookings", createBooking);
router.delete("/bookings/:id", deleteBooking);

export default router;
