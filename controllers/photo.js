const { Photo } = require("../models/Photo");
const User = require("../models/User");

module.exports = {
  index: (req, res) => {
    Gif.find({}).then(gifs => res.json(gifs));
  }
  // new: (req, res) => {
  //   Photo.findById({ _id: req.params.id }).then(photoId => res.json(photoId));
  // },
  // create: (req, res) => {
  // creating a new photo and saving it to the database
  // },
  // show: (req, res) => {
  // displaying the data for a single photo
  // },
  // edit: function (req, res) {
  // rendering the form to update an existing photo
  // },
  // update: (req, res) => {
  // updating a photo in the database
  // },
  // destroy: (req, res) => {
  // deleting a photo
  // }
};
