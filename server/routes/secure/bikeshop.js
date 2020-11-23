const router = require('express').Router(),
  {
    createBikeshop,
    getCurrentBikeshop,
    getBikeshopById,
    updateBikeshop,
    deleteBikeshop
  } = require('../../controllers/Bikeshop');
const isAdmin = require('../../middleware/authorization');

router.post('/', isAdmin(), createBikeshop);
router.get('/me', getCurrentBikeshop);
router.get('/find/:id', getBikeshopById);
router.patch('/:id', isAdmin(), updateBikeshop);
router.delete('/', isAdmin(), deleteBikeshop);

module.exports = router;
