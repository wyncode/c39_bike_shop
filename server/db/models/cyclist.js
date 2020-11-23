const mongoose = require('mongoose');

const cyclistSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User'
    },
    name: {
      type: String,
      trim: true
    },
    zipcode: {
      type: String,
      trim: true
    },
    phone: {
      type: String,
      trim: true
    },
    bikes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bicycle'
      }
    ],
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'serviceOrder'
      }
    ]
  },
  { timestamps: true }
);

//Creating relation between Cyclist and order
cyclistSchema.virtual('serviceOrders', {
  ref: 'ServiceOrder',
  localField: '_id',
  foreignField: 'cyclist'
});

cyclistSchema.virtual('bicycle', {
  ref: 'Bicycle',
  localField: '_id',
  foreignField: 'owner'
});
//Creating relationship between Cyclist and Review
cyclistSchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'reviewer'
});

const Cyclist = mongoose.model('Cyclist', cyclistSchema);

module.exports = Cyclist;
