const router = require('express').Router();

const {
  getAllMessage,
  createMessage,
  updateMessage,
  deleteMessage
} = require('../../controllers/message');

router.get('/', getAllMessage);
router.post('/', createMessage);
router.patch('/:messageId', updateMessage);
router.delete('/:messageId', deleteMessage);

module.exports = router;
