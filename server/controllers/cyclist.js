const Cyclist = require('../db/models/cyclist');
const ServiceOrder = require('../db/models/serviceOrder');
const Bicycles = require('../db/models/bicycle');

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
    let cyclist = {};
    let resp = await Cyclist.findById(req.params.id);
    const ordersIdArr = resp.orders.map((item) => item._id);
    const bikesIdArr = resp.bikes.map((item) => item._id);
    const orders = await ServiceOrder.find()
      .where('_id')
      .in(ordersIdArr)
      .exec();
    const bikes = await Bicycles.find().where('_id').in(bikesIdArr).exec();
    cyclist.data = {
      _id: resp._id,
      name: resp.name,
      zipcode: resp.zipcode,
      phone: resp.phone,
      user: resp.user
    };

    cyclist.bikes = bikes;
    cyclist.orders = orders;

    res.status(200).json(cyclist);
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
