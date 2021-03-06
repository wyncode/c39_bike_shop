const router = require('express').Router(),
  {
    getAllCyclist,
    getCurrentCyclist,
    updateCurrentCyclist,
    createCyclist
  } = require('../../controllers/cyclist');

router.post('/', createCyclist);
router.get('/', getAllCyclist);
router.get('/me', getCurrentCyclist);
router.patch('/:id', updateCurrentCyclist);

module.exports = router;
