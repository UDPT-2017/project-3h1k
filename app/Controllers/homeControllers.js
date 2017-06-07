var homeDB = require("../models/home.js");
var Qs = require('q');

var homeController = {
  homedefaultPage : function (req, res) {
      Qs.all([homeDB.top5mostauctionbid(), homeDB.top5bestprice() ,homeDB.top5cometoend(), homeDB.getCatogory()]).spread(function (temp1, temp2, temp3, temp4) {
        res.render("home", {
          layout : "application",
          mostauctionbid : temp1,
          bestprice : temp2,
          cometoend : temp3,
          catogorylist : temp4
        });
      });
  },
  homeSearchPage : function (req, res) {
    var object = {
        searchinput : req.query.searchinput,
        catogory : req.query.catogory
    }
    Qs.all([homeDB.searchPage(object), homeDB.getCatogory()]).spread(function (temp1, temp2) {
        res.render("_productAuction/SPDAUGIA", {
          layout : "application",
          catogorylist : temp2,
          productlist : temp1,
          catogoryChoose : req.body.catogory
        });
    });
  }
}
module.exports = homeController;
