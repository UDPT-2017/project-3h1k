var Router = require("express").Router;

var index = require("../app/Controllers/index.js");

var checking = require("./OthersfunctionChecking.js");

module.exports = function(app) {
    // home
    app.get("/", index.home.homedefaultPage);

    app.get("/item/:id", index.item.loadWithID);

    app.get("/register", checking.isLoggedLong, index.user.registerPage);

    app.get("/about", index.about.Defaultpage);

    app.get("/contact", index.contact.Defaultpage);

    app.get("/registerDauGia", checking.isLoggedIn, index.dangdaugia.Defaultpage);

    app.get("/login", checking.isLoggedLong, index.user.loginPage);

    app.post("/login", index.user.userLogin);

    app.get("/logout", index.user.userLogout);

    app.get("/location", index.location.Defaultpage);

    app.get("/inputvalidateEmail", index.user.userCheckEmail);

    app.get("/inputvalidateUsername", index.user.userCheckName);

    app.post("/register",  index.user.userRegister);

    app.get("/tesingview", index.user.testingCallback);

    app.get("/changepassword", checking.isLoggedIn, index.user.getchangepassword);

    app.post("/changepassword", index.user.changepassword);

    app.get("/timkiem", index.search.searchMenuPage);

    app.get("/danhmuc", index.catogory.searchCatogory);

    app.post("/wishlist", checking.isLoggedIn, index.wishlist.additemwishlist);

    app.get("/profile", checking.isLoggedIn, index.profile.Defaultpage);

    app.get("/profile/wishlist", checking.isLoggedIn, index.profile.wishlistUserPage);

    app.get("/profile/historyauction", checking.isLoggedIn, index.profile.historyauctionPage);

    app.get("/profile/historyvictory", checking.isLoggedIn, index.profile.historyvictoryPage);

    app.post("/profile", index.user.changeInformation);


    // cai nay la test co the xoa
    app.get("/popup", function (req, res) {
      res.render("testingPopup",{
        layout: "application"
      });
    })
    // login Admin
    app.get("/test1", function (req, res) {
       res.render("_featureWEB/loginAdmin", {
         layout: false
       });
    });
}
