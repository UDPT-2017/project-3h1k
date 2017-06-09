var Router = require("express").Router;

var index = require("../app/Controllers/index.js");

module.exports = function(app) {
    // home
    // cái item này nên để là :id thì tốt hơn
    app.get("/item", function(req, res) {
        res.render("_productAuction/item", {
            layout: "application"
        });
    });
    app.get("/", index.home.homedefaultPage);

    app.get("/register", index.user.registerPage);

    app.get("/about", index.about.Defaultpage);

    app.get("/contact", index.contact.Defaultpage);

    app.get("/profile", index.profile.Defaultpage);

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

    app.get("/login", index.user.loginPage);

    app.post("/login", index.user.userLogin);

    app.get("/location", index.location.Defaultpage);

    app.get("/itemsx", function (req, res) {
      res.render("_productCOM/detailProductCOM", {
          layout: "application"
      });
    });

    app.get("/inputvalidateEmail", index.user.userCheckEmail);

    app.get("/inputvalidateUsername", index.user.userCheckName);

    app.post("/register", index.user.userRegister);

    app.get("/tesingview", index.user.testingCallback);

    app.get("/changepassword", index.user.getchangepassword);

    app.post("/changepassword", index.user.changepassword);

    app.get("/timkiem", index.search.searchMenuPage);

    app.get("/danhmuc", index.catogory.searchCatogory);

    // login Admin
    app.get("/test1", function (req, res) {
       res.render("_featureWEB/loginAdmin", {
         layout: false
       });
    });
}
