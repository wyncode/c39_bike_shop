const router = require('express').Router();

const {
  getAllReviews,
  addReview,
  getReviewById,
  deleteReviewById
} = require('../../controllers/reviews');

router.route('/').get(getAllReviews);
router.route('/').post(addReview);
router.route('/:id').get(getReviewById);
router.route('/:id').delete(deleteReviewById);

module.exports = router;
