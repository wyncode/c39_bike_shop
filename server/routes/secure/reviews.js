const router = require('express').Router({ mergeParams: true });

const {
  getAllReviews,
  addReview,
  deleteReviewById,
  getReviewById
} = require('../../controllers/reviews');

const isAdmin = require('../../middleware/authorization');

router.get('/', getAllReviews);
router.post('/:bikeshop_id/review', addReview);
router.get('/:id', getReviewById);
router.delete('/:id', isAdmin(), deleteReviewById);

module.exports = router;
