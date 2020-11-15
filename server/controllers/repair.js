const repair = require('../db/models/repair');

exports.createRepair = async (req, res) => {
  const { description, repair, price, sameday, averagetime } = req.body;
  try {
    const repairs = new Bikeshop({
      repair,
      description,
      price,
      sameday,
      averagetime
    });

    res.status(201).json(repairs);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

exports.updateRepair = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    'repair',
    'description',
    'price',
    'sameday',
    'averagetime'
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).json({ message: 'Invalid updates' });
  try {
    updates.forEach((update) => (req.repair[update] = req.body[update]));

    await req.repairs.save();

    res.json(req.repairs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
