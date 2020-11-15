const Cyclist = require('../db/models/cyclist'),
  jwt = require('jsonwebtoken');

exports.createCyclist = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const cyclist = new Cyclist({
      name,
      email,
      password
    });
    const token = await cyclist.generateAuthToken();
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true
    });
    res.status(201).json(cyclist);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

// ***********************************************//
// Login a cyclist
// ***********************************************//
exports.loginCyclist = async (req, res) => {
  const { email, password } = req.body;
  try {
    const cyclist = await cyclist.findByCredentials(email, password);
    const token = await cyclist.generateAuthToken();
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true
    });
    res.json(cyclist);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

// ******************************
// Password Reset Request
// This route sends an email that the
// cyclist must click within 10 minutes
// to reset their password.
// ******************************
exports.requestPasswordReset = async (req, res) => {
  try {
    const { email } = req.query;
    const cyclist = await cyclist.findOne({ email });
    if (!cyclist) throw new Error('cyclist not found');
    const token = jwt.sign(
      { _id: cyclist._id.toString(), name: cyclist.name },
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
// Get current cyclist
// ***********************************************//
exports.getCurrentCyclist = async (req, res) => {
  res.json(req.cyclist);
};

// ***********************************************//
// Update a cyclist
// ***********************************************//
exports.updateCurrentCyclist = async (req, res) => {
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
    //Loop through each update, and change the value for the current cyclist to the value coming from the body
    updates.forEach((update) => (req.cyclist[update] = req.body[update]));
    //save the updated cyclist in the db
    await req.cyclist.save();
    //send the updated cyclist as a response
    res.json(req.cyclist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ***********************************************//
// Logout a cyclist
// ***********************************************//
exports.logoutCyclist = async (req, res) => {
  try {
    req.cyclist.tokens = req.cyclist.tokens.filter((token) => {
      return token.token !== req.cookies.jwt;
    });
    await req.cyclist.save();
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
    req.cyclist.tokens = [];
    await req.cyclist.save();
    res.clearCookie('jwt');
    res.json({ message: 'logged out from all devices!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ***********************************************//
// Delete a cyclist
// ***********************************************//

exports.deletecyclist = async (req, res) => {
  try {
    await req.cyclist.remove();
    sendCancellationEmail(req.cyclist.email, req.cyclist.name);
    res.clearCookie('jwt');
    res.json({ message: 'cyclist deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
