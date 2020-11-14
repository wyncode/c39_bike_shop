const cyclist = require('../db/models/cyclist');
(cloudinary = require('cloudinary').v2),
  ({
    sendWelcomeEmail,
    sendCancellationEmail,
    forgotPasswordEmail
  } = require('../emails/index')),
  (jwt = require('jsonwebtoken'));

// Creating Cyclist //

exports.createCyclist = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const cyclist = new cyclist({
      name,
      email,
      password
    });
    const token = await user.generateAuthToken();
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

//Login a Cyclist

exports.loginCyclist = async (req, res) => {
  const { email, password } = req.body;
  try {
    const cyclist = await cyclist.findbyCredentials(email, password);
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
