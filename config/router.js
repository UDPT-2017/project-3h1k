var Router = require("express").Router;

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.render("home", {
            layout: "application"
        });
    });

    // cái item này nên để là :id thì tốt hơn
    app.get("/item", function(req, res) {
        res.render("item", {
            layout: "application"
        });
    });

    app.get("/login", function(req, res) {
        res.render("login", {
            layout: "application"
        });
    });

    app.get("/register", function(req, res) {
        res.render("register", {
            layout: "applicationnoHeader"
        });
    });

    app.get("/about", function(req, res) {
        res.render("about", {
            layout: "application"
        });
    });

    app.get("/contact", function(req, res) {
        res.render("contact", {
            layout: "application"
        });
    });

    app.get("/profile", function (req, res) {
        res.render("profiletest", {
            layout: "applicationnoHeader"
        });
    });

    app.get("/registerDauGia", function (req, res) {
      res.render("DangDauGiaPage", {
          layout: "application"
      });
    });

    app.get("/daugia", function (req, res) {
      res.render("SPDAUGIA", {
        layout: "application"
      });
    });

    app.get("/cart", function (req, res) {
      res.render("ShoppingCart", {
        layout: "application"
      });
    });

    app.get("/test1", function (req, res) {
       res.render("loginAdmin", {
         layout: false
       });
    });

    app.get("/test2", function (req, res) {
      res.render("loginusers", {
          layout: "applicationnoHeader"
      });
    })
}
