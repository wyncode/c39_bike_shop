const mongoose = require('mongoose'),
  validator = require('validator'),
  bcrypt = require('bcryptjs'),
  jwt = require('jsonwebtoken');

const cyclistSchema = new mongoose.Schema(
  {
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
    phone: {
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
    serviceOrder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ServiceOrder'
    }
  },
  { timestamps: true }
);

//Creating relation between Cyclist and order
cyclistSchema.virtual('cyclist', {
  ref: 'ServiceOrder',
  localField: '_id',
  foreignField: 'cyclist'
});

//Creating relationship between Cyclist and Review
cyclistSchema.virtual('reviewer', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'reviewer'
});

cyclistSchema.methods.toJSON = function () {
  const cyclist = this;
  const cyclistObject = cyclist.toObject();
  delete cyclistObject.password;
  delete cyclistObject.tokens;
  return cyclistObject;
};

cyclistSchema.methods.generateAuthToken = async function () {
  const cyclist = this;
  const token = jwt.sign(
    {
      _id: cyclist._id.toString(),
      name: cyclist.name
    },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
  cyclist.tokens = cyclist.tokens.concat({ token });
  await cyclist.save();
  return token;
};

// Find cyclist by Email and Password
cyclistSchema.statics.findByCredentials = async (email, password) => {
  const cyclist = await cyclist.findOne({ email });
  if (!cyclist) throw new Error('Unable to log in.');
  const isMatch = await bcrypt.compare(password, cyclist.password);
  if (!isMatch) throw new Error('Invalid password, try again!');
  return cyclist;
};

// Mongoose Middleware to Hash cyclists Passwords
cyclistSchema.pre('save', async function (next) {
  const cyclist = this;
  if (cyclist.isModified('password'))
    cyclist.password = await bcrypt.hash(cyclist.password, 8);

  next();
});

const Cyclist = mongoose.model('Cyclist', cyclistSchema);

module.exports = Cyclist;
