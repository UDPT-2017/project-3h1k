var searchDB = require("../models/search.js");
var Qs = require('q');

var totalRec = 0,

pageSize  = 6,

pageCount = 0;

var start       = 0;

var currentPage = 1;

var searchController = {
  searchMenuPage : function (req, res) {
    var object = {
        searchinput : req.query.searchinput,
        catogory : req.query.catogory
    }
    Qs.all([searchDB.searchPage(object), searchDB.getCatogory()]).spread(function (temp1, temp2) {
        // khuc nay se cai phan trang san pham
        res.render("_productAuction/SPDAUGIA", {
          layout : "application",
          catogorylist : temp2,
          productlist : temp1,
          catogoryChoose : req.body.catogory
        });
    });
  }
}

module.exports = searchController;
