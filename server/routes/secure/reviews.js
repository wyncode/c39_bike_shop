const router = require('express').Router();

const {
  getAllReviews,
  addReview,
  getReviewById,
  deleteReviewById
} = require('../../controllers/reviews');

const isAdmin = require('../../middleware/authorization');

router.get('/', getAllReviews);
router.post('/', addReview);
router.get('/:id', getReviewById);
router.delete('/:id', isAdmin(), deleteReviewById);

module.exports = router;
