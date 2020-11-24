if (process.env.NODE_ENV !== 'production') require('dotenv').config();
//Import the DB connection
require('../config/index');

const Cyclist = require('../models/Cyclist'),
  faker = require('faker'),
  mongoose = require('mongoose');

const dbReset = async () => {
  const collections = Object.keys(mongoose.connection.collections);
  // Loop through each collection and delete all the documents.
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    await collection.deleteMany();
  }

  //Count number of user documents ===> should be 0
  await Cyclist.countDocuments({}, function (err, count) {
    console.log('Number of users: ', count);
  });

  //Loop 100 times and create 100 new users
  const cyclistIdArray = [];
  for (let i = 0; i < 30; i++) {
    const me = new User({
      avatar: faker.internet.avatar()
    });
    cyclistIdArray.push(me._id);
  }

  //Count number of users ===> should be 100
  await Cyclist.countDocuments({}, function (err, count) {
    console.log('Number of cyclists: ', count);
  });
};

dbReset();
