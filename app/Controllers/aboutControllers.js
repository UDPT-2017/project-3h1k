var aboutController = {
    Defaultpage : function (req, res) {
      res.render("about", {
          layout: "application"
      });
    }
}

module.exports = aboutController;
