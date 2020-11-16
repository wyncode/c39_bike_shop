const mongoose = require('mongoose'),
  validator = require('validator'),
  bcrypt = require('bcryptjs'),
  jwt = require('jsonwebtoken'),
  Invoice = require('./invoice');

const cyclistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid e-mail address.');
      }
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error("'Password' can't be used as a password.");
      }
      if (value.length < 6) {
        throw new Error('Password must be at least 6 characters in length.');
      }
    }
  },
  zipcode: {
    type: String,
    trim: true
  },
  bicycles: [
    {
      bike: {
        bikeName: {
          type: String,
          trim: true
        },
        bikeModel: {
          type: String,
          trim: true
        },
        bikeType: {
          type: String,
          trim: true
        }
      }
    }
  ],
  tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ],
  avatar: {
    type: String
  },
  phone: {
    type: String,
    trim: true
  },
  timestamps: true
});

cyclistSchema.virtual('cyclist', {
  ref: 'ServiceOrder',
  localField: '_id',
  foreignField: 'cyclist'
});

cyclistSchema.virtual('review', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'reviewId'
});
cyclistSchema.methods.generateAuthToken = async function () {
  const cyclist = this;
  const token = jwt.sign(
    { _id: cylist._id.toString(), name: cyclist.name },
    process.env.JWT_SECRET,
    { expiresIn: '72h' }
  );

  cyclist.tokens = cyclist.tokens.concat({ token });
  await cyclist.save();

  return token;
};
