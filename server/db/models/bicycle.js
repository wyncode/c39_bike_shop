const mongoose = require('mongoose');

const bicycleSchema = new mongoose.Schema({
  bikeName: {
    type: String,
    trim: true
  },
  bikeModel: {
    type: String,
    trim: true
  },
  bikeType: {
    type: String,
    trim: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cyclist'
  }
});

const Bicycle = mongoose.model('Bicycle', bicycleSchema);

module.exports = Bicycle;
