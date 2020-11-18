const router = require('express').Router(),
  {
    getCurrentCyclist,
    updateCurrentCyclist
  } = require('../../controllers/cyclist');

router.get('/me', getCurrentCyclist);
router.patch('/me', updateCurrentCyclist);

module.exports = router;
