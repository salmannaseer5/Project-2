const mongoose = require("mongoose");

const PhotoSchema = new mongoose.Schema({
  title: String,
  url: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Photo", PhotoSchema);
