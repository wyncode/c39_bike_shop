const router = require('express').Router(),
  {
    createCyclist,
    loginCyclist,
    requestPasswordReset,
    passwordRedirect
  } = require('../../controllers/cyclist'),
  {
    createBikeshop,
    loginBikeshop,
    bikeshopPasswordRequest,
    bikeshopPasswordRedirect
  } = require('../../controllers/bikeshop');

router.post('/', createCyclist);
router.post('/login', loginCyclist);
router.post('/bikeshop', createBikeshop);
router.post('/loginbikeshop', loginBikeshop);
router.get('/password', requestPasswordReset);
router.get('/password/:token', passwordRedirect);
router.get('/password', bikeshopPasswordRequest);
router.get('/password/:token', bikeshopPasswordRedirect);

module.exports = router;
