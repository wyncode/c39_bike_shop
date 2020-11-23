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

cyclistSchema.virtual('bikes', {
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
