import { Router } from "express";
import {
  getReviews,
  createReview,
  updateReview,
  deleteReview,
} from "../controllers/reviews.controller";

const router = Router();

router.get("/bookings", getReviews);
router.post("/bookings", createReview);
router.delete("/bookings/:id", deleteReview);

export default router;
