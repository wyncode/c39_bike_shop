const Repair = require('../db/models/repair');

// ***********************************************//
// create repair
// ***********************************************//

exports.createRepair = async (req, res) => {
  try {
    const newRepair = new Repair(req.body);
    newRepair.bikeshop = req.params.bikeshop_id;

    const createRepair = await newRepair.save();

    res.json(createRepair);
  } catch (error) {
    console.log(error.message);
  }
};

// ***********************************************//
// change repair
// ***********************************************//
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
    return res.status(400).json({ message: 'invalid updates' });

  try {
    const repair = await Repair.findOne({
      _id: req.params.id,
      bikeshop: req.user.bikeshop._id
    });
    if (!repair) return res.status(404).json({ message: 'repair not found' });
    updates.forEach((update) => (repair[update] = req.body[update]));
    await repair.save();
    res.status(200).json(repair);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// ***********************************************//
// Get a delete Repair
// ***********************************************//

exports.deleteRepair = async (req, res) => {
  try {
    const repair = await Repair.findOneAndDelete({
      _id: req.params.id,
      bikeshop: req.user.bikeshop._id
    });
    if (!repair) return res.status(404).json({ message: 'repair not found' });
    res.status(200).json({ message: 'repair has been deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ***********************************************//
// Get a specific Repair
// ***********************************************//

exports.getSpecificRepair = async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).json({ message: 'not a valid repair' });

  try {
    const repair = await repair.findOne({ _id });
    if (!repair) return res.status(400).json({ message: 'repair not found' });
    res.status(200).json(repair);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ***********************************************//
// Get a all repairs
// ***********************************************//

exports.getAllRepairs = (req, res) => {
  Repair.find()
    .then((repairs) => res.status(200).json(repairs))
    .catch((err) => res.status(500).json('Error: ' + err));
};
