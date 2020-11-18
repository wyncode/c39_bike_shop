const router = require('express').Router(),
  {
    createBikeshop,
    getCurrentBikeshop,
    updateCurrentBikeshop,
    deleteBikeshop
  } = require('../../controllers/Bikeshop');
const isAdmin = require('../../middleware/authorization');

router.post('/', isAdmin(), createBikeshop);
router.get('/:id', getCurrentBikeshop);
router.patch('/:id', updateCurrentBikeshop);
router.delete('/', deleteBikeshop);

module.exports = router;
