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
  }
});

const Bicycle = mongoose.model('Bicycle', bicycleSchema);

module.exports = Bicycle;
