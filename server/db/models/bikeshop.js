const mongoose = require('mongoose'),
  validator = require('validator');

const bikeshopSchema = new mongoose.Schema(
  {
    shopName: {
      type: String,
      unique: true,
      trim: true,
      required: true
    },
    email: {
      type: String,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Email is invalid');
        }
      }
    },
    phone: {
      type: String,
      trim: true
    },
    logo: {
      type: String
    },
    website: {
      type: String,
      trim: true
    },
    shopContact: {
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
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
      }
    ],
    repairs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Repair'
      }
    ],
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ServiceOrder'
      }
    ]
  },
  { timestamps: true }
);

bikeshopSchema.virtual('cyclists', {
  ref: 'Cyclist',
  localField: '_id',
  foreignField: 'bikeshop'
});

const Bikeshop = mongoose.model('Bikeshop', bikeshopSchema);

module.exports = Bikeshop;
