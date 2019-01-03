const mongoose = require("../db/connection");
const Schema = mongoose.Schema;
mongoose.set('useFindAndModify', false);

const Photo = new mongoose.Schema({
  title: String,
  url: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  comments: ["Comment"]
});

module.exports = mongoose.model("Photo", Photo);
