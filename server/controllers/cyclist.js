const Cyclist = require('../db/models/cyclist');
const cyclist = require('../db/models/cyclist');
const { forgotPasswordEmail } = require('../emails');
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

// Password Reset Request
exports.requestPasswordReset = async (req, res) => {
  try {
    const { email } = req.query,
      cyclist = await Cyclist.findOne({ email });
    if (!user) throw new Error("account doesn't exist");
    //Buidling JWT Token
    const token = jwt.sign(
      { _id: cyclist._id.toString(), name: user.name },
      process.env.JWT_SECRET,
      {
        expiresIn: '15m'
      }
    );
    forgotPasswordEmail(email, token);
    res.json({ message: 'reset password email sent' });
  } catch (e) {
    res.json({ error: e.toString() });
  }
};

//Redirect to password reset page

exports.passwordRedirect = async (req, res) => {
  const { token } = req.params;
  try {
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (err) throw new Error(err.message);
    });
    res.cookies('jwt', token, {
      httpOnly: true,
      maxAge: 800000,
      sameSite: 'Strict'
    });
    res.passwordRedirect(process.env.URL + '/update-password');
  } catch (e) {
    res.json({ error: e.toString() });
  }
};

//Update a Password
exports.updatePassword = async (req, res) => {
  try {
    req.user.password = req.body.password;
    await req.user.save();
    res.clearCookie('jwt');
    res.json({ message: 'password udpated succesfully' });
  } catch (e) {
    res.json({ error: e.toString() });
  }
};
