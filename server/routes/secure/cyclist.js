const router = require('express').Router(),
  {
    getCurrentCyclist,
    updateCurrentCyclist
  } = require('../../controllers/cyclist');

router.get('/:id', getCurrentCyclist);
router.patch('/:id', updateCurrentCyclist);

module.exports = router;
