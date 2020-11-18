const router = require('express').Router(),
  {
    createBikeshop,
    getCurrentBikeshop,
    updateCurrentBikeshop,
    deleteBikeshop
  } = require('../../controllers/Bikeshop');

router.post('/', createBikeshop);
router.get('/:id', getCurrentBikeshop);
router.patch('/:id', updateCurrentBikeshop);
router.delete('/', deleteBikeshop);

module.exports = router;
