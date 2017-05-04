var Image = require("../models/image.js");

var albumsController = {
  defaultpage: function (req, res) {
      res.render("albums",
      {
      title: "HBS ALBUMS PAGE",
      message: "My Albums",
      allalbums: Image.findAll(),
      layout: "application"
      });
  }
}

module.exports = albumsController;
