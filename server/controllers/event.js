const Event = require('../db/models/event');

exports.getAllEvents = (req, res) => {
  Event.find()
    .then((event) => res.status(200).json(event))
    .catch((err) => res.status(500).json('Error: ' + err));
};

exports.createEvent = async (req, res) => {
  try {
    const event = await new Event({
      ...req.body
    });
    await event.save();
    res.status(200).send(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
