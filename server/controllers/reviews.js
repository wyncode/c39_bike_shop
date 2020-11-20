const Bikeshop = require('../db/models/bikeshop'),
  Review = require('../db/models/reviews');

exports.getAllReviews = (req, res) => {
  Review.find()
    .then((reviews) => res.status(200).json(reviews))
    .catch((err) => res.status(500).json('Error: ' + err));
};

exports.addReview = async (req, res) => {
  try {
    const newReview = new Review(req.body);
    newReview.bikeshop = req.params.bikeshop_id;
    newReview.reviewer = req.user._id;
    const bikeshop = await Bikeshop.findById(req.params.bikeshop_id);
    const createReview = await newReview.save();
    await bikeshop.reviews.push(createReview._id);
    await bikeshop.save();
    res.json(createReview);
  } catch (error) {
    console.log(error.message);
  }
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
