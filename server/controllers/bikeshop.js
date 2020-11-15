const bikeshop = require('../db/models/bikeshop'),
  jwt = require('jsonwebtoken');

exports.createBikeshop = async (req, res) => {
  const {
    BikeShopName,
    email,
    password,
    phoneNumber,
    logo,
    shopContact,
    website
  } = req.body;
  try {
    const bikeshop = new Bikeshop({
      BikeShopName,
      email,
      password,
      phoneNumber,
      logo,
      shopContact,
      website
    });
    const token = await bikeshop.generateAuthToken();
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true
    });
    res.status(201).json(bikeshop);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

// ***********************************************//
// Login a bikeshop
// ***********************************************//
exports.loginBikeshop = async (req, res) => {
  const { email, password } = req.body;
  try {
    const bikeshop = await Bikeshop.findByCredentials(email, password);
    const token = await bikeshop.generateAuthToken();
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true
    });
    res.json(bikeshop);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

// ******************************
// Password Reset Request
// This route sends an email that the
// bikeshop must click within 10 minutes
// to reset their password.
// ******************************
exports.requestPasswordReset = async (req, res) => {
  try {
    const { email } = req.query;
    const bikeshop = await Bikeshop.findOne({ email });
    if (!bikeshop) throw new Error('bikeshop not found');
    const token = jwt.sign(
      { _id: bikeshop._id.toString(), name: bikeshop.name },
      process.env.JWT_SECRET,
      { expiresIn: '10m' }
    );
    forgotPasswordEmail(email, token);
    res.json({ message: 'reset password email sent!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.passwordRedirect = async (req, res) => {
  const { token } = req.params;
  try {
    jwt.verify(token, process.env.JWT_SECRET, function (err) {
      if (err) throw new Error(err.message);
    });
    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: 600000,
      sameSite: 'Strict'
    });
    res.redirect(process.env.URL + '/update-password');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// AUTHENTICATED REQUESTS

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
    'name',
    'email',
    'password',
    'avatar',
    'bicycle',
    'zipcode'
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
// Logout a bikeshop
// ***********************************************//
exports.logoutBikeshop = async (req, res) => {
  try {
    req.bikeshop.tokens = req.bikeshop.tokens.filter((token) => {
      return token.token !== req.cookies.jwt;
    });
    await req.bikeshop.save();
    res.clearCookie('jwt');
    res.json({ message: 'logged out!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// ***********************************************//
// Logout all devices
// ***********************************************//

exports.logoutAllDevices = async (req, res) => {
  try {
    req.bikeshop.tokens = [];
    await req.bikeshop.save();
    res.clearCookie('jwt');
    res.json({ message: 'logged out from all devices!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ***********************************************//
// Delete a bikeshop
// ***********************************************//

exports.deleteBikeshop = async (req, res) => {
  try {
    await req.bikeshop.remove();
    sendCancellationEmail(req.bikeshop.email, req.bikeshop.name);
    res.clearCookie('jwt');
    res.json({ message: 'bikeshop deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
