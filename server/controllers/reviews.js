const Bikeshop = require('../db/models/bikeshop'),
  Review = require('../db/models/reviews');

exports.getAllReviews = (req, res) => {
  Review.find()
    .then((reviews) => res.status(200).json(reviews))
    .catch((err) => res.status(500).json('Error: ' + err));
};

exports.addReview = (req, res) => {
  const newReview = new Review(req.body);
  newReview.bikeshop = req.params.Bikeshop_id;
  return Bikeshop.findById(req.params.Bikeshop_id)
    .then((bikeshop) => {
      newReview.save().then((createReview) => {
        bikeshop.Reviews.push(createReview._id);
        bikeshop
          .save()
          .then(res.json(createReview))
          .catch((err) => res.status(500).json('Error: ' + err));
      });
    })
    .catch((err) => res.status(500).json('Error: ' + err));
};

exports.getReviewById = (req, res) => {
  const filter = req.params.id;
  Review.findById(filter)
    .then((resp) => res.json(resp))
    .catch((err) => res.status(500).json('Error: ' + err));
};

exports.deleteReviewById = (req, res) => {
  Review.findByIdAndDelete(req.params.id)
    .then((review) => {
      if (!review) {
        return res.status(404).json('Error: Review not found!');
      }
      res.status(204).json(review);
    })
    .catch((err) => {
      res.status(500).json('Error: ' + err);
    });
};
