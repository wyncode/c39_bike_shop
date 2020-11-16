const router = require('express').Router(),
  {
    getCurrentBikeshop,
    updateCurrentBikeshop,
    logoutBikeshop,
    logoutAllDevices,
    deleteBikeshop,
    updatePassword
  } = require('../../controllers/Bikeshop');

router.get('/me', getCurrentBikeshop);
router.patch('/me', updateCurrentBikeshop);
router.post('/logout', logoutBikeshop);
router.post('/logoutall', logoutAllDevices);
router.delete('/', deleteBikeshop);
router.put('/password', updatePassword);

module.exports = router;
