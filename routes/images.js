var express = require('express');
var router = express.Router();
const image_controller = require("../controllers/imageController");
const authenticate = require('../maddleware/authenticate');
router.get("/", image_controller.image_list);


//IMAGE ADD GET
router.get("/image_add", authenticate, image_controller.image_add_get);
//IMAGE ADD POST
router.post("/image_add", authenticate, image_controller.image_add_post);

// GALLERY DELETE (/galleries/:id/delete)
router.get("/:id/delete", authenticate, image_controller.image_delete);

router.get("/:id/change", authenticate, image_controller.image_change);

module.exports = router;