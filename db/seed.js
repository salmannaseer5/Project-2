const mongoose = require("./connection");
const seeds = require("./seedData");
const Photo = require("../models/Photo");

mongoose.Promise = Promise;

Photo.remove({}).then(_ => {
  console.log("Dropped the DB");
  Photo.collection.insert(seeds).then(seededEntries => {
    console.log(seededEntries);
    mongoose.connection.close();
  });
});
