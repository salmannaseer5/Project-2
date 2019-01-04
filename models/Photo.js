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
  comment: {
    type: Schema.Types.ObjectId,
    ref: "Comment"
  },
  comments: []
});

module.exports = mongoose.model("Photo", Photo);
