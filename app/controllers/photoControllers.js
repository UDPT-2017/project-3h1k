var Image = require("../models/image.js");

var photoController = {
  defaultpage: function (req, res) {
      res.render("photo",
      {
        title: "HBS Photo PAGE",
        message: "My Photo",
        allalbums: Image.findAll(),
        layout: "application"
      });
  },
  SinglePhoto:  function (req, res) {
    var id = parseInt(req.params.id) - 1;
    var messages = "My Single Photo " + id;
    res.render("singlePhoto", {
      title: "Photo" ,
      message: messages,
      Sphoto : Image.getOne(id),
      layout: "application"
    });
  }
}

module.exports = photoController;
