var homeDB = require("../models/home.js");
var Qs = require('q');
var handle = require('handlebars'); // --- module mới dùng để xử lý helpers

var homeController = {
  homedefaultPage : function (req, res) {
      Qs.all([homeDB.top5mostauctionbid(), homeDB.top5bestprice() ,homeDB.top5cometoend(), homeDB.getCatogory()]).spread(function (temp1, temp2, temp3, temp4) {
        res.render("home", {
          layout : "application",
          mostauctionbid : temp1,
          bestprice : temp2,
          cometoend : temp3,
          catogorylist : temp4,
          helpers: {
            trimString: function (passedString) {
              var theString = passedString.substring(0,20);
              if(passedString.length <= 20){
                return new handle.SafeString(passedString);
              } else {
                return new handle.SafeString(theString + "...");
              }
            }
          }
        });
      });
  }
}
module.exports = homeController;
