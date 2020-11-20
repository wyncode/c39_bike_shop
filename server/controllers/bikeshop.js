const Bikeshop = require('../db/models/bikeshop');
const User = require('../db/models/user');
const Review = require('../db/models/reviews');
const Repair = require('../db/models/repair');

//UNAUTHENTICATED

exports.getAllBikeshops = (req, res) => {
  Bikeshop.find()
    .then((bikeshops) => res.status(200).json(bikeshops))
    .catch((err) => res.status(500).json('Error: ' + err));
};

exports.getBikeshopById = async (req, res) => {
  try {
    let obj = {};
    // const filter = req.params.id;
    const resp = await Bikeshop.findById(req.params.id).populate('reviews');
    const reviewsArr = await resp.reviews;

    const reviews = await Promise.all(
      reviewsArr.map(async (item) => {
        const results = await Review.find().where('_id').in(item._id).exec();
        return results;
      })
    );
    reviewsFlat = reviews.flat();

    const repairsArr = await resp.repairs;
    const repairs = await Promise.all(
      repairsArr.map(async (item) => {
        const repResults = await Repair.find().where('_id').in(item._id).exec();
        return repResults;
      })
    );
    repairsFlat = repairs.flat();

    obj = {
      _id: resp._id,
      shopName: resp.shopName,
      email: resp.email,
      shopContact: resp.shopContact,
      website: resp.website,
      repairs: repairsFlat,
      reviews: reviewsFlat
    };
    return res.json(obj);
  } catch (err) {
    console.log(err);
  }
};

// AUTHENTICATED REQUESTS
exports.createBikeshop = async (req, res) => {
  const { shopName, shopContact, email, website, repairs } = req.body;
  try {
    const bikeshop = new Bikeshop({
      shopName,
      shopContact,
      email,
      website,
      repairs,
      owner: req.user._id
    });
    await bikeshop.save();
    res.status(201).json(bikeshop);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

// ***********************************************//
// Get current bikeshop
// ***********************************************//
exports.getCurrentBikeshop = async (req, res) => {
  const user = await User.findById(req.user._id).populate('bikeshop');
  res.send(user.bikeshop);
};

// ***********************************************//
// Update a bikeshop
// ***********************************************//
exports.updateBikeshop = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    'shopName',
    'email',
    'logo',
    'shopContact',
    'website'
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).json({ message: 'invalid updates' });

  try {
    const bikeshop = await Bikeshop.findOne({
      owner: req.user._id
    });
    if (!bikeshop)
      return res.status(404).json({ message: 'Bikeshop not found' });
    updates.forEach((update) => (bikeshop[update] = req.body[update]));
    await bikeshop.save();
    res.status(200).json(bikeshop);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ***********************************************//
// Delete a bikeshop
// ***********************************************//

exports.deleteBikeshop = (req, res) => {
  Bikeshop.findByIdAndDelete(req.params.id)
    .then((bikeshop) => {
      if (!bikeshop) {
        return res.status(404).json('Error: Bikeshop not found!');
      }
      res.status(204).json(bikeshop);
    })
    .catch((err) => {
      res.status(500).json('Error: ' + err);
    });
};

exports.uploadLogo = async (req, res) => {
  try {
    const response = await cloudinary.uploader.upload(
      req.files.logo.tempFilePath
    );
    req.bikeshop.logo = response.secure_url;
    await req.bikeshop.save();
    res.json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
