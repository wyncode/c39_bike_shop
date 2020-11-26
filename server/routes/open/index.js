const router = require('express').Router(),
  {
    createUser,
    loginUser,
    requestPasswordReset,
    passwordRedirect
  } = require('../../controllers/user'),
  { getAllBikeshops, getBikeshopById } = require('../../controllers/bikeshop'),
  { getAllEvents, createEvent } = require('../../controllers/event');

router.post('/', createUser);
router.post('/login', loginUser);
router.get('/password', requestPasswordReset);
router.get('/password/:token', passwordRedirect);
router.get('/bikeshop', getAllBikeshops);
router.get('/bikeshop/find/:id', getBikeshopById);
router.get('/events', getAllEvents);
router.post('/events', createEvent);

module.exports = router;
