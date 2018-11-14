const express = require("express");
const router = express.Router();
const photoController = require("../controllers/photo");

router.get("/", photoController.index);
router.post("/", photoController.create);
router.get("/new", photoController.new);
router.get("/:id", photoController.show);
router.put("/:id", photoController.update);
// router.delete("/:id", photoController.delete);

module.exports = router;
