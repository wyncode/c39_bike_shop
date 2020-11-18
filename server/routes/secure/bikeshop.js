const router = require('express').Router(),
  {
    createBikeshop,
    getCurrentBikeshop,
    updateCurrentBikeshop,
    deleteBikeshop
  } = require('../../controllers/Bikeshop');

router.post('/', createBikeshop);
router.get('/me', getCurrentBikeshop);
router.patch('/me', updateCurrentBikeshop);
router.delete('/', deleteBikeshop);

module.exports = router;
