var Image = require("../models/image.js");
var homeController = {
  defaultpage: function (req, res) {
      var keyword = req.query.search;
      var imgsearch = [];
      var imgs = Image.findAll();

      for (var i = 0; i < imgs.length; i++) {
          if(imgs[i].url.search(keyword) !== -1 && keyword){
            imgsearch.push(imgs[i]);
          }
      }
      res.render("home",
      {
        title: "HBS HOME PAGE",
        message: "HBS HOME",
        layout: "application",
        user: req.session.user,
        toUpperCase: function (value) {
            return value.toUpperCase && value && value.toUpperCase();
        },
        imgSearch: imgsearch,
        isnoResulf: imgsearch.length === 0
      });
  }
}



module.exports = homeController;
