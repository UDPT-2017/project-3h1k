var locationController = {
    Defaultpage : function (req, res) {
      res.render("storelocation", {
          layout: "applicationnoHeader"
      });
    }
}

module.exports = locationController;
