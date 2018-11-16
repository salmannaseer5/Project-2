const mongoose = require("../db/connection");

const PhotoSchema = new mongoose.Schema({
  title: String,
  url: String,
  createdAt: {
    type: Date,
    default: Date.now()
  }
  // author: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User"
  // },
  // comments: [Comment]
});

module.exports = mongoose.model("Photo", PhotoSchema);
