const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
  bikeshop: {
    type: mongoose.Schema.Types.ObjectId
  },
  message: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  }
});
