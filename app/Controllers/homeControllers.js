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
  }
}
module.exports = homeController;
