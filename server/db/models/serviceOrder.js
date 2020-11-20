const mongoose = require('mongoose');

const serviceOrderSchema = new mongoose.Schema({
  bikeshop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bikeshop',
    required: true
  },
  cyclist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cyclist',
    required: true
  },
  dropoffDate: {
    type: Date
  },
  expectedPickup: {
    type: Date
  },
  progress: [
    {
      received: {
        type: Boolean
      },
      diagnosed: {
        type: Boolean
      },
      partsOrdered: {
        type: Boolean
      },
      inProgress: {
        type: Boolean
      },
      delay: {
        type: Boolean
      },
      ready: {
        type: Boolean
      }
    }
  ]
});

const ServiceOrder = mongoose.model('ServiceOrder', serviceOrderSchema);

module.exports = ServiceOrder;
