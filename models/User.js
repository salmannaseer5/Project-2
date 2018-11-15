const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const User = new Schema({
  email: String,
  password: String
  // photos: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Photo"
  //   }
  // ]
});
// var User = mongoose.model("User", UserSchema);
// module.exports = User;
module.exports = mongoose.model("User", User);
