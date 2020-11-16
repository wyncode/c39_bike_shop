const router = require('express').Router(),
  {
    createRepair,
    getSpecificRepair,
    getAllRepairs,
    updateRepair,
    deleteRepair
  } = require('../../controllers/repair');

router.post('/', createRepair);
router.get('/:id', getSpecificRepair);
router.get('/', getAllRepairs);
router.put('/:id', updateRepair);
router.delete('/:id', deleteRepair);

module.exports = router;
