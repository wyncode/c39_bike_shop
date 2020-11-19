const Cyclist = require('../db/models/cyclist');
const User = require('../db/models/user');
const Review = require('../db/models/reviews');

// AUTHENTICATED REQUESTS
exports.createCyclist = async (req, res) => {
  const { name, zipcode, phone, bicycles } = req.body;
  try {
    const cyclist = new Cyclist({
      name,
      zipcode,
      phone,
      bicycles
    });

    const user = await User.findById(req.user._id);

    user.cyclist = cyclist._id;

    await Promise.all([cyclist.save(), user.save()]);
    res.status(201).json(cyclist);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

// ***********************************************//
// Get current cyclist
// ***********************************************//
exports.getCurrentCyclist = async (req, res) => {
  const user = await User.findById(req.user._id).populate('cyclist');
  res.json(user);
};

// ***********************************************//
// Update a cyclist
// ***********************************************//
exports.updateCurrentCyclist = async (req, res) => {
  const updates = Object.keys(req.body); // => ['email', 'name', 'password']
  const allowedUpdates = ['name', 'zipcode', 'favBikeshop', 'bicycle'];
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
