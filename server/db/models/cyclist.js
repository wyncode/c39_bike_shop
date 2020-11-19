const mongoose = require('mongoose');

const cyclistSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    zipcode: {
      type: String,
      trim: true
    },
    phone: {
      type: String,
      trim: true
    },
    bicycles: {
      bike: {
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
      }
    },
    serviceOrder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ServiceOrder'
    }
  },
  { timestamps: true }
);

//Creating relation between Cyclist and order
cyclistSchema.virtual('serviceOrders', {
  ref: 'ServiceOrder',
  localField: '_id',
  foreignField: 'cyclist'
});

//Creating relationship between Cyclist and Review
cyclistSchema.virtual('reviewer', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'reviewer'
});

const Cyclist = mongoose.model('Cyclist', cyclistSchema);

module.exports = Cyclist;
