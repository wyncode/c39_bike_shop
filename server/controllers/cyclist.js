const Cyclist = require('../db/models/cyclist'),
  User = require('../db/models/user');

exports.getAllCyclist = (req, res) => {
  Cyclist.find()
    .then((cyclist) => res.status(200).json(cyclist))
    .catch((err) => res.status(500).json('Error: ' + err));
};

// AUTHENTICATED REQUESTS
exports.createCyclist = async (req, res) => {
  const { name, zipcode, phone, bicycles } = req.body;
  try {
    const cyclist = new Cyclist({
      name,
      zipcode,
      phone,
      bicycles,
      user: req.user._id
    });
    console.log(cyclist);
    await cyclist.save();
    res.status(201).json(cyclist);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

// ***********************************************//
// Get current cyclist
// ***********************************************//

exports.getCurrentCyclist = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate({
      path: 'cyclist',
      populate: {
        path: 'orders',
        model: 'ServiceOrder',
        populate: [
          { path: 'bikeshop', model: 'Bikeshop' },
          { path: 'repairs', model: 'Repair' }
        ]
      }
    });
    res.send({
      user,
      cyclist: user.cyclist
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ***********************************************//
// Update a cyclist
// ***********************************************//
exports.updateCurrentCyclist = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'zipcode', 'phone', 'bicycles'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).json({ message: 'invalid updates' });

  try {
    const cyclist = await Cyclist.findOne({
      user: req.user._id
    });
    if (!cyclist) return res.status(404).json({ message: 'cyclist not found' });
    updates.forEach((update) => (cyclist[update] = req.body[update]));
    await cyclist.save();
    res.status(200).json(cyclist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
