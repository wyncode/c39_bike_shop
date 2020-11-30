const Bicycle = require('../db/models/bicycle');
const Cyclist = require('../db/models/cyclist');
const User = require('../db/models/user');

exports.addBike = async (req, res) => {
  try {
    const newBike = new Bicycle(req.body);

    const user = await User.findById(req.user._id).populate('cyclist');
    const cyclistId = user.cyclist._id;
    console.log(cyclistId);
    newBike.owner = cyclistId;
    const cyclist = await Cyclist.findById(cyclistId);
    cyclist.bikes.push(newBike._id);

    await Promise.all([newBike.save(), cyclist.save()]);
    res.json(newBike);
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteBikeById = (req, res) => {
  Bicycle.findByIdAndDelete(req.params.id)
    .then((bike) => {
      if (!bike) {
        return res.status(404).json('Error: Bike not found!');
      }
      res.status(204).json(bike);
    })
    .catch((err) => {
      res.status(500).json('Error: ' + err);
    });
};
