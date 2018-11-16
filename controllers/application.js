const express = require("express");
const router = express.Router();
const Photo = require("../models/Photo");

router.get("/", (req, res, next) => {
  // res.send('index')
  Photo.find({}).then(photos => {
    res.render("index", { photos });
  });
});
// GET /
// function home(req, res) {
//   res.render('index');
// }

// module.exports = {
//   home: home
// };

module.exports = router;
