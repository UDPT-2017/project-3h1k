var Router = require("express").Router;
var querystring = require('querystring');

function accountExists (email) {
  var emails = ['thaihocmap123@gmail.com', 'alex@email.com', 'admin@email.com'];
  return emails.indexOf(email) > -1;
}

function usernameExists (usernameEnter) {
  var username = ['hocmap123'];
  return username.indexOf(usernameEnter) > -1;
}

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

    app.get("/inputvalidateEmail", function (req, res) {
      var params = req.url.split('?')[1];
      var data   = querystring.parse(params);
      var email  = data.email;
      console.log(email);


      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

      if (accountExists(email)) {
        res.write('"Email is already"');
      } else {
        res.write('"true"');
      }

      res.end();
    });
    app.get("/inputvalidateUsername", function (req, res) {
      var params = req.url.split('?')[1].split('=')[1];

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

      if (usernameExists(params)) {
        res.write('"Username is already"');
      } else {
        res.write('"true"');
      }
      res.end();
    });
}
