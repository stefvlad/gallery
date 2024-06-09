
const asyncHandler = require("express-async-handler");


const Gallery = require("../models/gallery");
const User = require("../models/user");
const Image = require("../models/image");

const { body, validationResult } = require('express-validator');


exports.image_list = asyncHandler(async (req, res, next) => {
 const all_images = await Image.find({}).populate("gallery").exec();
 res.render("image_list", { title: "List of all images:", image_list: all_images });
});


exports.image_add_get = asyncHandler(async (req, res, next) => {
    let all_galleries;
  
    all_galleries = await Gallery.find({}).populate("user").exec();
  
    res.render("image_form", {
      title: "Add Image",
      galleries: all_galleries
    });
  });
  
  exports.image_add_post = [
    body("i_name", "Image name too short.")
      .trim()
      .isLength({ min: 2 })
      .escape(),
  
    body("i_description")
      .trim()
      .escape(),
  
    body("i_gallery", "Gallery must be selected.")
      .trim()
      .isLength({ min: 1 })
      .escape(),
  
    asyncHandler(async (req, res, next) => {
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        let all_galleries = await Gallery.find({}).exec();
        res.render("image_form", {
          title: "Add Image",
          galleries: all_galleries,
          errors: errors.array()
        });
        return;
      } else {
        const image = new Image({
          name: req.body.i_name,
          description: req.body.i_description,
          gallery: req.body.i_gallery,
          path: req.body.i_path, 
          updated: new Date()
        });
  
        await image.save();
  
        res.redirect("/images");
      }
    })
  ];
  

  exports.image_delete = asyncHandler(async (req, res, next) => {
    try {
      await Image.findByIdAndDelete(req.params.id);
      
      res.redirect("/images");
    } catch (err) {
      next(err);
    }
  });

  exports.image_change = asyncHandler(async (req, res, next) => {
    try {
      await Image.findByIdAndDelete(req.params.id);
      
      res.redirect("/images/image_add");
    } catch (err) {
      next(err);
    }
  });