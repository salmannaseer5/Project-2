const Photo = require("../models/Photo");
const seedData = require("./seedData.json");

Photo.remove({})
  .then(() => {
    return Photo.collection.insert(seedData);
  })
  .then(() => {
    process.exit();
  });
