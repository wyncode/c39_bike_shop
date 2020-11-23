const router = require('express').Router({ mergeParams: true });

const { addBike, deleteBikeById } = require('../../controllers/bicycle');

router.post('/:cyclist_id/bike', addBike);
router.post('/:cyclist_id/bike/:id', deleteBikeById);

module.exports = router;
