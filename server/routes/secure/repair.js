const router = require('express').Router(),
  {
    createRepair,
    getAllRepairs,
    updateRepair,
    deleteRepair
  } = require('../../controllers/repair');

const isAdmin = require('../../middleware/authorization');

router.post('/:bikeshop_id', isAdmin(), createRepair);

router.get('/', getAllRepairs);
router.put('/:id', isAdmin(), updateRepair);
router.delete('/:id', isAdmin(), deleteRepair);

module.exports = router;
