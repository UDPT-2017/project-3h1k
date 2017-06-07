var Router = require("express").Router;
var querystring = require('querystring');

var index = require("../app/Controllers/index.js");

module.exports = function(app) {


    // home
    app.get("/", index.home.homedefaultPage);
    // cái item này nên để là :id thì tốt hơn
    app.get("/item", function(req, res) {
        res.render("_productAuction/item", {
            layout: "application"
        });
    });

    app.get("/register", function(req, res) {
        res.render("_featureWEB/register", {
            successMess : res.locals.Success,
            FailMess : res.locals.Fail,
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
            user: req.session.user,
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

    app.get("/login", function (req, res) {
      res.render("_featureWEB/loginusers", {
          successMess : res.locals.Success,
          FailMess : res.locals.Fail,
          layout: "applicationnoHeader"
      });
    });

    app.post("/login", index.user.userLogin);

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

    app.get("/inputvalidateEmail", index.user.userCheckEmail);
    app.get("/inputvalidateUsername", index.user.userCheckName);
    app.post("/register", index.user.userRegister);
    // thu trang home day
    app.get("/tesingview", index.user.testingCallback);
    app.get("/changepassword", function (req, res) {
        res.render("_Users/changepassword", {
          successMess : res.locals.Success,
          FailMess : res.locals.Fail,
          layout: "applicationnoHeader"
        });
    })

    app.post("/changepassword", index.user.changepassword);
    app.get("/danhmuc", index.home.homeSearchPage);
}
