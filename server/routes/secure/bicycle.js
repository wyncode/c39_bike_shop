const router = require('express').Router({ mergeParams: true });

const { addBike, deleteBikeById } = require('../../controllers/bicycle');

router.post('/', addBike);
router.post('/:id', deleteBikeById);

module.exports = router;
