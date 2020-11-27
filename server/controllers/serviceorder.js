const ServiceOrder = require('../db/models/serviceOrder');
const Bikeshop = require('../db/models/bikeshop');
const Cyclist = require('../db/models/cyclist');

exports.createOrder = async (req, res) => {
  // console.log('here')
  // console.log(req.body)
  console.log(req.body.data);

  try {
    const { bikeshop, cyclist, repairs } = req.body.data;
    const newOrder = new ServiceOrder({
      bikeshop,
      cyclist,
      repairs: [repairs]
    });
    const order = await newOrder.save();
    // console.log(order);
    const [cyclistDB, bikeshopDB] = await Promise.all([
      Cyclist.findById(req.body.data.cyclist),
      Bikeshop.findById(req.body.data.bikeshop)
    ]);

    cyclistDB.orders.push(order._id);
    bikeshopDB.orders.push(order._id);
    await Promise.all([bikeshopDB.save(), cyclistDB.save()]);

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
  const allowedUpdates = ['progress', 'dropoffDate', 'expectedPickup'];
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
