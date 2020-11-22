const router = require('express').Router(),
  {
    createBikeshop,
    getCurrentBikeshop,
    updateBikeshop,
    deleteBikeshop
  } = require('../../controllers/Bikeshop');
const isAdmin = require('../../middleware/authorization');

router.post('/', isAdmin(), createBikeshop);
router.get('/:id', getCurrentBikeshop);
router.patch('/:id', isAdmin(), updateBikeshop);
router.delete('/', isAdmin(), deleteBikeshop);

module.exports = router;
