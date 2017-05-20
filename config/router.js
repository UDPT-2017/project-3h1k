var Router = require("express").Router;

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.render("home", {
            layout: "application"
        });
    })

    app.get("/item", function(req, res) {
        res.render("item", {
            layout: "application"
        });
    })

    app.get("/login", function(req, res) {
        res.render("login", {
            layout: "application"
        });
    })
}
