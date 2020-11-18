const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      trim: true
    },
    rating: {
      type: Number,
      trim: true
    },
    bikeshop: {
      type: Schema.Types.ObjectId,
      ref: 'Bikeshop'
    },
    cyclist: {
      type: Schema.Types.ObjectId,
      ref: 'cyclist'
    }
  },
  { timestamps: true }
);

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
