const mongoose = require('mongoose');

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
      unique: true,
      trim: true,
      required: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Email is invalid');
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
  { timestamps: true }
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

const Bikeshop = mongoose.model('Bikeshop', bikeshopSchema);

module.exports = Bikeshop;
