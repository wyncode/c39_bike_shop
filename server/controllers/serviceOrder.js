const ServiceOrder = require('../db/models/serviceOrder');
const { requestPasswordReset } = require('./user');

exports.createServiceOrder = async (req, res) => {
  try {
    const order = await new ServiceOrder({
      ...req.body,
      bikeshop: req.bikeshop._id,
      cyclist: req.cyclist._id
    });
    await order.save();
    res.status(200).send(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateServiceOrder = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['progess', 'expectedPickup', 'dropoffDate'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).json({ message: 'invalid updates' });

  try {
    const order = await ServiceOrder.findOne({
      _id: req.params.id,
      owner: req.bikeshop._id
    });
    if (!order) return res.status(404).json({ message: 'order not found' });
    updates.forEach((update) => (task[update] = req.body[update]));
    await order.save();
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
