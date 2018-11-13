const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  message: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  ref: Photo,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Comment", CommentSchema);
