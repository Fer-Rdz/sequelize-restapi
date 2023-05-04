import { Reviews } from "../models/reviews.js";

export const getReviews = async (req, res) => {
  const reviews = await Reviews.findAll();
  res.json(reviews);
};

export const createReview = async (req, res) => {
  const { id, message, client_id, stars } = req.body;
  const newReviews = await Reviews.create({
    id,
    message,
    client_id,
    stars,
  });
  res.json(newReviews);
};

export const updateReview = async (req, res) => {
  const { id } = req.params;
  const { message, stars } = req.body;
  const review = await Reviews.findByPk(id);
  reviewe.message = message;
  review.stars = stars;
  await review.save();
  res.send("Service updated");
};

export const deleteReview = async (req, res) => {
  const { id } = req.params;
  await Reviews.destroy({
    where: {
      id,
    },
  });
  res.send("Service Delete");
};
