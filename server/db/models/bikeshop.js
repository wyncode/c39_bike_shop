const mongoose = require('mongoose'),
  validator = require('validator'),
  bcrypt = require('bcryptjs'),
  jwt = require('jsonwebtoken');

const bikeshopSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      trim: true,
      required: true
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      required: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Email is invalid');
        }
      }
    },
    password: {
      type: String,
      trim: true,
      required: true,
      validate(value) {
        if (value.toLowerCase().includes('password')) {
          throw new Error('Password cannot be password.');
        }
        if (value.length < 8) {
          throw new Error('Password must be at least 8 characters.');
        }
      }
    },
    logo: {
      type: String
    },
    website: {
      type: String,
      trim: true
    },
    shopContact: [
      {
        street: {
          type: String,
          required: true,
          trim: true
        },
        city: {
          type: String,
          required: true,
          trim: true
        },
        state: {
          type: String,
          required: true,
          trim: true
        },
        zipCode: {
          type: String,
          required: true,
          trim: true
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
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
      }
    ],
    serviceOrders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ServiceOrder'
      }
    ],
    cyclists: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cyclist'
      }
    ],
    repairs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Repair'
      }
    ]
  },
  { timestap: true }
);

bikeshopSchema.virtual('shop', {
  ref: 'ServiceOrder',
  localField: '_id',
  foreignField: 'shop'
});

bikeshopSchema.virtual('bikeshop', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'bikeshop'
});

bikeshopSchema.methods.toJSON = function () {
  const bikeshop = this;
  const bikeshopObject = bikeshop.toObject();
  delete bikeshopObject.password;
  delete bikeshopObject.tokens;
  return bikeshopObject;
};

bikeshopSchema.methods.generateAuthToken = async function () {
  const bikeshop = this;
  const token = jwt.sign(
    {
      _id: bikeshop._id.toString(),
      name: bikeshop.name
    },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
  bikeshop.tokens = bikeshop.tokens.concat({ token });
  await bikeshop.save();
  return token;
};

bikeshopSchema.statics.findByCredentials = async (email, password) => {
  const bikeshop = await Bikeshop.findOne({ email });
  if (!bikeshop) throw new Error('Bikeshop not found');
  const isMatch = await bcrypt.compare(password, bikeshop.password);
  if (!isMatch) throw new Error('Invalid password, try again.');
  return bikeshop;
};

bikeshopSchema.pre('save', async function (next) {
  const bikeshop = this;
  if (bikeshop.isModified('password'))
    bikeshop.password = await bcrypt.hash(bikeshop.password, 8);
  next();
});

const Bikeshop = mongoose.model('Bikeshop', bikeshopSchema);

module.exports = Bikeshop;
