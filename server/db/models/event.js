const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    trim: true
  },
  eventDate: {
    type: String,
    trim: true
  },
  eventDescription: {
    type: String,
    trim: true
  },
  eventType: {
    type: String,
    trim: true
  }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
