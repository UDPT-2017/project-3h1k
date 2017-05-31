var Router = require("express").Router;

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.render("home", {
            layout: "application"
        });
    });

    // cái item này nên để là :id thì tốt hơn
    app.get("/item", function(req, res) {
        res.render("_productAuction/item", {
            layout: "application"
        });
    });

    app.get("/login", function(req, res) {
        res.render("_featureWEB/login", {
            layout: "application"
        });
    });

    app.get("/register", function(req, res) {
        res.render("_featureWEB/register", {
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
      res.render("_featureWEB/DangDauGiaPage", {
          layout: "application"
      });
    });

    app.get("/daugia", function (req, res) {
      res.render("_productAuction/SPDAUGIA", {
        layout: "application"
      });
    });

    app.get("/cart", function (req, res) {
      res.render("_Cart/ShoppingCart", {
        layout: "application"
      });
    });

    app.get("/test1", function (req, res) {
       res.render("_featureWEB/loginAdmin", {
         layout: false
       });
    });

    app.get("/test2", function (req, res) {
      res.render("_featureWEB/loginusers", {
          layout: "applicationnoHeader"
      });
    });

    app.get("/location", function (req, res) {
      res.render("storelocation", {
          layout: "applicationnoHeader"
      });
    });

    app.get("/SPCompany", function (req, res) {
      res.render("_productCOM/SPCompany", {
          layout: "application"
      });
    });

    app.get("/itemsx", function (req, res) {
      res.render("_productCOM/detailProductCOM", {
          layout: "application"
      });
    });
}
