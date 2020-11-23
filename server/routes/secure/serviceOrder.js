const router = require('express').Router({ mergeParams: true });

const {
  getAllOrders,
  createOrder,
  getOrderById,
  updateOrder,
  deleteOrderById
} = require('../../controllers/serviceorder');

const isAdmin = require('../../middleware/authorization');

router.get('/', getAllOrders);
router.post('/', createOrder);
router.patch('/:id', updateOrder);
router.delete('/:id', isAdmin(), deleteOrderById),
  router.get('/:id', getOrderById);

module.exports = router;
