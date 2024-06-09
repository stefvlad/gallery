var express = require('express');
var router = express.Router();
const gallery_controller = require("../controllers/galleryController");
const authenticate = require('../maddleware/authenticate');
router.get("/", gallery_controller.gallery_list);

// GALLERY ADD GET (/galleries/gallery_add)
router.get("/gallery_add", authenticate, gallery_controller.gallery_add_get);
// GALLERY ADD POST (/galleries/gallery_add)
router.post("/gallery_add", authenticate, gallery_controller.gallery_add_post);

// GALLERY BROWSE GET
router.get("/gallery_browse", gallery_controller.gallery_browse);
// GALLERY BROWSE POST
router.post("/gallery_browse", gallery_controller.gallery_browse);

// GALLERY DELETE (/galleries/:id/delete)
router.get("/:id/delete", authenticate, gallery_controller.gallery_delete);




module.exports = router;