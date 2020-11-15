const { createCyclist, loginCyclist } = require('../../controllers/cyclist');

const router = require('express').Router();

router.post('/', createCyclist);
router.post('/login', loginCyclist);

// JUST FOR DEMO PURPOSES, PUT YOUR ACTUAL API CODE HERE
// router.get('/api/demo', (request, response) => {
//   response.json({
//     message: 'Hello from server.js'
//   });
// });
// END DEMO

module.exports = router;
