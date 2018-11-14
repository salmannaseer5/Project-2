const express = require("express");
const router = express.Router();
const applicationController = require("../controllers/application.js");

router.get("/", applicationController);
router.all("/", (req, res) => {
  res.status(400).send();
});

module.exports = router;
