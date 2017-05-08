
var Router = require("express").Router;

module.exports = function(app) {

  app.get("/", function (req, res) {
    res.render("home", {
      layout: "application"
    });
  })

}
