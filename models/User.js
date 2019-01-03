const mongoose = require('../db/connection');
const Schema = mongoose.Schema;
// var bcrypt   = require('bcrypt-nodejs');

var User = mongoose.Schema({
  local : {
    email        : String,
    password     : String,
  },
  photos: [
    {
      type: Schema.Types.ObjectId,
      ref: "Photo"
    }
  ]
});

// User.methods.validPassword = function(password) {
//   return bcrypt.compareSync(password, this.local.password);
// };

// User.methods.encrypt = function(password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

module.exports = mongoose.model('User', User);
// // 