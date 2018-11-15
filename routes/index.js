const express = require("express");
const router = express.Router();
const applicationController = require("../controllers/application.js");

router.get("/", applicationController);
router.use("/photo", require("./photo"));
router.use("/user", require("./user"));

router.all("/", (req, res) => {
  res.status(400).send();
});

module.exports = router;
