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
  { timestamps: true, toJSON: { virtuals: true } }
);

//Creating relationship between Cyclist and Review
cyclistSchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'reviewer'
});

const Cyclist = mongoose.model('Cyclist', cyclistSchema);

module.exports = Cyclist;
