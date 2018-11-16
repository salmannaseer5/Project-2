const express = require("express");
const router = express.Router();
const Photo = require("../models/Photo");

router.get("/", (req, res, next) => {
  Photo.find({}).then(photos => {
    res.render("index", { photos });
  });
});


module.exports = router;
