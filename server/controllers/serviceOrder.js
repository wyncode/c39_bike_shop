const ServiceOrder = require('../db/models/serviceOrder');
const Bikeshop = require('../db/models/bikeshop');
const Repair = require('../db/models/repair');

exports.createOrder = async (req, res) => {
  const newOrder = new ServiceOrder(req.body);
  newOrder.bikeshop = req.body.bikeshop;
  newOrder.cyclist = req.user._id;
  newOrder.repair = req.repair_id;

  try {
    const bikeshop = await Bikeshop.findById(req.body.bikeshop);

    const order = new ServiceOrder({
      ...req.body
    });
    await order.save();

    await bikeshop.orders.push(order);
    await bikeshop.save();

    res.status(201).json(order);
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
  try {
    let resp = await ServiceOrder.findById(req.params.id);
    let order = {};
    order.data = {
      _id: resp._id,
      dropoffDate: resp.dropoffDate,
      expectedPickup: resp.expectedPickup,
      progress: resp.progress
    };

    const repairsIdArr = resp.repairs.map((item) => item._id);
    const repairs = await Repair.find().where('_id').in(repairsIdArr).exec();
    order.repairs = repairs;

    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
