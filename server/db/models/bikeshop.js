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
    logo: {
      type: String
    },
    website: {
      type: String,
      trim: true
    },
    // shopContact: {
    //   street: {
    //     type: String,
    //     required: true,
    //     trim: true
    //   },
    //   city: {
    //     type: String,
    //     required: true,
    //     trim: true
    //   },
    //   state: {
    //     type: String,
    //     required: true,
    //     trim: true
    //   },
    //   zipCode: {
    //     type: String,
    //     required: true,
    //     trim: true
    //   }
    // },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
);

bikeshopSchema.virtual('cyclists', {
  ref: 'Cyclist',
  localField: '_id',
  foreignField: 'bikeshop'
});

bikeshopSchema.virtual('serviceOrders', {
  ref: 'ServiceOrder',
  localField: '_id',
  foreignField: 'bikeshop'
});

bikeshopSchema.virtual('repairs', {
  ref: 'Repair',
  localField: '_id',
  foreignField: 'bikeshop'
});

bikeshopSchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'bikeshop'
});

const Bikeshop = mongoose.model('Bikeshop', bikeshopSchema);

module.exports = Bikeshop;
