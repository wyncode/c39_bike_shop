if (process.env.NODE_ENV !== 'production') require('dotenv').config();
//Import the DB connection
require('../config/index');

const { lorem } = require('faker');
const User = require('../models/user'),
  Cyclist = require('../models/cyclist'),
  Bikeshop = require('../models/bikeshop'),
  Repair = require('../models/repair'),
  Bicycle = require('../models/bicycle'),
  Review = require('../models/reviews'),
  faker = require('faker'),
  mongoose = require('mongoose');

const getRandomRecord = (records) =>
  records[Math.floor(Math.random() * records.length)];

const dbReset = async () => {
  const collections = Object.keys(mongoose.connection.collections);
  // Loop through each collection and delete all the documents.
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    await collection.deleteMany();
  }

  //Count number of user documents ===> should be 0
  await User.countDocuments({}, function (err, count) {
    console.log('Number of users: ', count);
  });

  //Loop 100 times and create 100 new users
  const usersToCreate = [];
  const users = [];
  const cyclistsToCreate = [];
  const cyclists = [];
  const bikeshopsToCreate = [];
  const bikeshops = [];
  const bikesToCreate = [];
  const bikes = [];
  const repairsToCreate = [];
  const repairs = [];
  const reviewsToCreate = [];
  const reviews = [];

  for (let i = 0; i < 10; i++) {
    const user = {
      name: faker.name.firstName(),
      password: '12345678',
      email: faker.internet.email(),
      avatar: faker.internet.avatar(),
      admin: i < 5
    };

    usersToCreate.push(user);
  }

  await User.insertMany(usersToCreate);
  console.log('inserted users!');

  const savedUsers = await User.find();
  users.push(...savedUsers);

  const cyclistUsers = users.filter((user) => !user.admin);
  const bikeshopUsers = users.filter((user) => user.admin);

  for (let i = 0; i < cyclistUsers.length; i++) {
    const cyclist = {
      name: faker.name.firstName(),
      phone: faker.phone.phoneNumber(),
      zipcode: faker.address.zipCodeByState('fl'),
      user: cyclistUsers[i]._id
    };
    cyclistsToCreate.push(cyclist);
  }
  await Cyclist.insertMany(cyclistsToCreate);
  console.log('inserted cyclists!');

  const savedCyclists = await Cyclist.find();
  cyclists.push(...savedCyclists);

  for (let i = 0; i < bikeshopUsers.length; i++) {
    const bikeshop = {
      shopName: faker.company.companyName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      logo: faker.image.sports(),
      website: faker.internet.url(),
      shopContact: {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.stateAbbr(),
        zipCode: faker.address.zipCodeByState('fl')
      },
      longitude: faker.address.longitude(),
      latitude: faker.address.latitude(),
      owner: bikeshopUsers[i]._id
    };
    bikeshopsToCreate.push(bikeshop);
  }

  await Bikeshop.insertMany(bikeshopsToCreate);
  console.log('inserted bikeshops!');

  const savedBikeshops = await Bikeshop.find();
  bikeshops.push(...savedBikeshops);

  for (let i = 0; i < bikeshops.length; i++) {
    for (let i = 0; i < 5; i++) {
      const repair = {
        repair: faker.lorem.words(),
        description: faker.lorem.paragraph(),
        price: faker.commerce.price(),
        sameday: faker.random.boolean(),
        averagetime: faker.random.number(),
        bikeshop: bikeshops[i]._id
      };
      repairsToCreate.push(repair);
    }
  }
  await Repair.insertMany(repairsToCreate);
  console.log('inserted repairs!');

  for (let i = 0; i < cyclists.length; i++) {
    for (let i = 0; i < 3; i++) {
      const cyclistId = cyclists[i]._id;
      const bike = {
        bikeName: faker.random.word(),
        bikeModel: faker.vehicle.model(),
        owner: cyclistId
      };
      bikesToCreate.push(bike);
    }
  }

  await Bicycle.insertMany(bikesToCreate);
  console.log('inserted bikes!');

  const savedBikes = await Bicycle.find();
  bikes.push(...savedBikes);

  for (let i = 0; i < bikes.length; i++) {
    const bike = bikes[i];
    const cyclistToUpdate = await Cyclist.findById(bike.owner);
    cyclistToUpdate.bikes.push(bike._id);
    await cyclistToUpdate.save();
  }

  for (let i = 0; i < bikeshops.length; i++) {
    for (let i = 0; i < 3; i++) {
      const bikeshopId = bikeshops[i]._id;
      const review = {
        review: faker.lorem.paragraph(),
        rating: faker.random.number(5),
        bikeshop: bikeshopId,
        reviewer: getRandomRecord(cyclists)
      };
      reviewsToCreate.push(review);
    }
  }

  await Review.insertMany(reviewsToCreate);
  console.log('inserted reviews');

  const savedReviews = await Review.find();
  reviews.push(...savedReviews);

  for (let i = 0; i < reviews.length; i++) {
    const review = reviews[i];

    const bikeshopToUpdate = await Bikeshop.findById(review.bikeshop);
    bikeshopToUpdate.reviews.push(review._id);
    await bikeshopToUpdate.save();
  }

  //Count number of users ===> should be 100
  await User.countDocuments({}, function (err, count) {
    console.log('Number of users: ', count);
  });
  await Cyclist.countDocuments({}, function (err, count) {
    console.log('Number of Cyclists: ', count);
  });
  await Bikeshop.countDocuments({}, function (err, count) {
    console.log('Number of Bikeshops: ', count);
  });
  await Repair.countDocuments({}, function (err, count) {
    console.log('Number of Repairs: ', count);
  });
  await Bicycle.countDocuments({}, function (err, count) {
    console.log('Number of Bicycles: ', count);
  });
  await Review.countDocuments({}, function (err, count) {
    console.log('Number of Reviews: ', count);
  });
};

dbReset();
