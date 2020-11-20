const ServiceOrder = require('../db/models/serviceOrder');
const Bikeshop = require('../db/models/bikeshop');

exports.createOrder = async (req, res) => {
  try {
    const newOrder = new ServiceOrder(req.body);
    newOrder.bikeshop = req.body.bikeshop;
    newOrder.cyclist = req.user._id;
    const bikeshop = await Bikeshop.findById(req.body.bikeshop);
    const createOrder = await newOrder.save();
    await bikeshop.orders.push(createOrder._id);
    await bikeshop.save();
    res.json(createOrder);
  } catch (error) {
    console.log(error.message);
  }
};

exports.getAllOrders = (req, res) => {
  ServiceOrder.find()
    .then((orders) => res.status(200).json(orders))
    .catch((err) => res.status(500).json('Error: ' + err));
};

exports.updateOrder = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['dropoffDate', 'expectedPickup', 'progress'];
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
  try {
    const order = ServiceOrder.findById(req.params.id);
    if (!order) {
      return res.status(404).json('Error: Order not found!');
    }
    await res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
