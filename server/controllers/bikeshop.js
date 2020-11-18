const Bikeshop = require('../db/models/bikeshop');

//UNAUTHENTICATED

exports.getAllBikeshops = (req, res) => {
  Bikeshop.find()
    .then((bikeshops) => res.status(200).json(bikeshops))
    .catch((err) => res.status(500).json('Error: ' + err));
};

exports.getBikeshopById = (req, res) => {
  const filter = req.params.id;
  Bikeshop.findById(filter)
    .then((resp) => res.json(resp))
    .catch((err) => res.status(500).json('Error: ' + err));
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
      repairs
    });
    res.status(201).json(bikeshop);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

// ***********************************************//
// Get current bikeshop
// ***********************************************//
exports.getCurrentBikeshop = async (req, res) => {
  res.json(req.bikeshop);
};

// ***********************************************//
// Update a bikeshop
// ***********************************************//
exports.updateCurrentBikeshop = async (req, res) => {
  const updates = Object.keys(req.body); // => ['email', 'name', 'password']
  const allowedUpdates = [
    // make global
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).json({ message: 'Invalid updates' });
  try {
    //Loop through each update, and change the value for the current bikeshop to the value coming from the body
    updates.forEach((update) => (req.bikeshop[update] = req.body[update]));
    //save the updated bikeshop in the db
    await req.bikeshop.save();
    //send the updated bikeshop as a response
    res.json(req.bikeshop);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ***********************************************//
// Delete a bikeshop
// ***********************************************//

exports.deleteBikeshop = async (req, res) => {
  try {
    await req.bikeshop.remove();
    res.json({ message: 'bikeshop deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.uploadLogo = async (req, res) => {
  try {
    const response = await cloudinary.uploader.upload(
      req.files.logo.tempFilePath
    );
    req.bikeshop.logo = response.secure_url;
    await req.user.save();
    res.json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
