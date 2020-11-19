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
  res.json(req.bikeshop);
};

// ***********************************************//
// Update a bikeshop
// ***********************************************//
exports.updateBikeshop = (req, res) => {
  Bikeshop.findByIdAndUpdate(req.params.id)
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
