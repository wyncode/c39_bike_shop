const ServiceOrder = require('../db/models/serviceorder');
const Bikeshop = require('../db/models/bikeshop');
const Cyclist = require('../db/models/cyclist');

exports.createOrder = async (req, res) => {
  try {
    const newOrder = new ServiceOrder(req.body);

    const [cyclist, bikeshop] = await Promise.all([
      Cyclist.findById(req.body.cyclist),
      Bikeshop.findById(req.body.bikeshop)
    ]);

    cyclist.orders.push(newOrder._id);
    bikeshop.orders.push(newOrder._id);

    await Promise.all([bikeshop.save(), cyclist.save(), newOrder.save()]);

    res.status(201).json(newOrder);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

exports.getAllOrders = (req, res) => {
  ServiceOrder.find()
    .then((orders) => res.status(200).json(orders))
    .catch((err) => res.status(500).json('Error: ' + err));
};

exports.updateOrder = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    'progress',
    'dropOffDate',
    'expectedPickup',
    'description'
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).json({ message: 'invalid updates' });
  const filter = req.params.id;
  try {
    const order = await ServiceOrder.findByIdAndUpdate(filter);
    if (!order) return res.status(404).json({ message: 'order not found' });
    updates.forEach((update) => (order[update] = req.body[update]));
    await order.save();
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteOrderById = (req, res) => {
  ServiceOrder.findByIdAndDelete(req.params.id)
    .then((order) => {
      if (!order) {
        return res.status(404).json('Error: Order not found!');
      }
      res.status(204).json(order);
    })
    .catch((err) => {
      res.status(500).json('Error: ' + err);
    });
};

exports.getOrderById = async (req, res) => {
  const order = await ServiceOrder.findById(req.order._id)
    .populate('bikeshop')
    .populate('repairs')
    .populate('cyclist');

  res.send(order);
};
