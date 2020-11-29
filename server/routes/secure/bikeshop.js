const router = require('express').Router(),
  {
    createBikeshop,
    getCurrentBikeshop,
    updateBikeshop,
    deleteBikeshop
  } = require('../../controllers/bikeshop');
const isAdmin = require('../../middleware/authorization');

router.post('/', isAdmin(), createBikeshop);
router.get('/me', getCurrentBikeshop);
router.patch('/:id', isAdmin(), updateBikeshop);
router.delete('/', isAdmin(), deleteBikeshop);

module.exports = router;
