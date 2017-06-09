var contactController = {
    Defaultpage : function (req, res) {
      res.render("contact", {
          layout: "application"
      });
    }
}

module.exports = contactController;
