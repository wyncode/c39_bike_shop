const mongoose = require('mongoose');

const serviceOrderSchema = new mongoose.Schema({
  bikeshop: {
    type: Schema.Types.ObjectId,
    ref: 'Bikeshop'
  },
  cyclist: {
    type: Schema.Types.ObjectId,
    ref: 'Cyclist'
  },
  repairs: [
    {
      repair: {
        type: Schema.Types.ObjectId,
        ref: 'Repair'
      }
    }
  ],
  dropoffDate: {
    type: Date
  },
  expectedPickup: {
    type: Date
  },
  diagnostic: {
    type: Boolean
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
serviceOrderSchema.virtual('bikeshop', {
  ref: 'Bikeshop',
  localField: '_id',
  foreignField: 'serviceOrder'
});
serviceOrderSchema.virtual('cyclist', {
  ref: 'Cyclist',
  localField: '_id',
  foreignField: 'serviceOrder'
});

const ServiceOrder = mongoose.model('ServiceOrder', serviceOrderSchema);

module.exports = ServiceOrder;
