const Bicycle = require('../db/models/bicycle');

exports.addBike = async (req, res) => {
  try {
    const newBike = new Bicycle(req.body);

    newBike.owner = req.params.cyclist_id;

    const createBike = await newBike.save();

    res.json(createBike);
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
