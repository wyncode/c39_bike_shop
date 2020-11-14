const mongoose = require('mongoose'),
  validator = require('validator'),
  bcrypt = require('jsonwebtoken');

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
        if (!validator.isEail(value)) {
          throw new Error('Email is invalid.');
        }
      }
    },
    password: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (value.toLowerCase().includes('password')) {
          throw new Error("Password can't be password.");
        }
        if (value.lenght < 8) {
          throw new Error('Password must be at least 6 characters long.');
        }
      }
    },
    admin: {
      type: Boolean,
      required: true,
      default: false
    },
    tokens: [
      {
        token: {
          type: String,
          required: true
        }
      }
    ],
    avatar: {
      type: string
    }
  },
  {
    timestamps: true
  }
);

//Creating relation between Cyclist and order

cyclistSchema.virtual('task', {
  ref: 'Task',
  localField: '_id',
  foreignField: 'owner'
});

cyclistSchema.methods.toJson = function () {
  const cyclist = this;
  const cyclistObject = cylist.toObject;
  delete cyclistObject.password;
  delete cyclistObject.tokens;
  return cyclistObject;
};

cyclistSchema.methods.generateAuthToken = async function () {
  const cyclist = this;
  const token = jwt.sign(
    { _id: cylist._id.toString(), name: cyclist.name },
    process.env.JWT_SECRET,
    { expiresIn: '72h' }
  );

  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

// Find User by Email and Password
cyclistSchema.statics.findByCredentials = async (email, password) => {
  const cyclist = await cyclist.findOne({ email });
  if (!user) throw new Error('Unable to log in.');
  const isMatch = await bcrypt.compare(password, cyclist.password);
  if (!isMatch) throw new Error('Unable to login.');
  return user;
};

// Mongoose Middleware to Hass users Passwords
cyclistSchema.pre('save', async function (next) {
  const user = this;
  if (cyclist.isModified('password'))
    cylist.password = await bcrypt.hash(cyclist.password, 8);

  next();
});

// Delete user tasks when user is removed/

cyclistSchema.pre('remove', async function (next) {
  const user = this;
  await Order.deleteMany({
    owner: cyclist._id
  });
  next();
});

const Cyclist = mongoose.model('Cyclist', cyclistSchema);

module.exports = Cyclist;
