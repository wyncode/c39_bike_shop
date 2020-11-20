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
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Bikeshop'
    },

    reviewer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Cyclist'
    }
  },
  { timestamps: true }
);

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
