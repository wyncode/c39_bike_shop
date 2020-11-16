const router = require('express').Router();

const {
  getAllReviews,
  addReview,
  getReviewById,
  updateReview,
  deleteReviewById
} = require('../controllers/Review');

router.route('/').get(getAllReviews);
router.route('/').post(addReview);
router.route('/:id').get(getReviewById);
router.route('/:id').put(updateReview);
router.route('/:id').delete(deleteReviewById);

module.exports = router;
