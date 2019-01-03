const mongoose = require("./connection");
const seedData = require("./seedData");
const Photo = require("../models/Photo");

mongoose.Promise = Promise;


Photo.remove({})
  .then(() => {
    return Photo.collection.insert(seedData);
  })
  .then(() => {
    process.exit();
  })
  .catch((err) => {
    console.log(err)
  })
