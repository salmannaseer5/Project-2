const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/photos");
mongoose.Promise = Promise;
module.exports = mongoose;
