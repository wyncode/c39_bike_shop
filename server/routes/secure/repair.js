const router = require('express').Router(),
  {
    createRepair,
    getSpecificRepair,
    getAllRepairs,
    updateRepair,
    deleteRepair
  } = require('../../controllers/repair');

const isAdmin = require('../../middleware/authorization');

router.post('/', isAdmin(), createRepair);
router.get('/:id', getSpecificRepair);
router.get('/', getAllRepairs);
router.put('/:id', isAdmin(), updateRepair);
router.delete('/:id', isAdmin(), deleteRepair);

module.exports = router;
