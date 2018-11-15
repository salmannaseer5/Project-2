const Photo = require("../models/Photo");
const User = require("../models/User");

module.exports = {
  index: (req, res) => {
    Photo.find({}).then(photos => res.json(photos));
    // res.send("index view");
  },
  new: (req, res) => {
    Photo.findById;
  },
  create: (req, res) => {
    Photo.create(req.body);
    Photo.find({}).then(photos => res.json(photos));
    // creating a new photo and saving it to the database
  },
  show: (req, res) => {
    Photo.findById({ _id: req.params.id }).then(showPhoto =>
      res.json(showPhoto)
    );
  },

  edit: (req, res) => {
    // rendering the form to update an existing photo
  },
  update: (req, res) => {
    // updating a photo in the database
    Photo.findOneAndUpdate({ _id: req.body.id }, req.body).then(photos =>
      Photo.find({}).then(photos => {
        res.jason(photos);
      })
    );
  },
  destroy: (req, res) => {
    // deleting a photo
  }
};
