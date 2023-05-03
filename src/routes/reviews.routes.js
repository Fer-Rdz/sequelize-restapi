import { Router } from "express";
import {
  getReviews,
  createReview,
  updateReview,
  deleteReview,
} from "../controllers/reviews.controller";

const router = Router();

router.get("/reviews", getReviews);
router.get("/reviews/:id", updateReview);
router.post("/reviews", createReview);
router.delete("/reviews/:id", deleteReview);

export default router;
