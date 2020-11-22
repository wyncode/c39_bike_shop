const router = require('express').Router();

const {
  createServiceOrder,
  updateServiceOrder,
  getSpecificOrder,
  deleteServiceOrder
} = require('../../controllers/serviceOrder');

router.post('/', createServiceOrder);
router.patch('/:id', updateServiceOrder);
router.get('/:id', getSpecificOrder);
router.delete('/:id', deleteServiceOrder);
