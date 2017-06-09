var catogoryDB = require("../models/catogory.js");
var Qs = require('q');

var catogoryController = {
  searchCatogory : function (req, res) {
    Qs.all([catogoryDB.findCatogoryID(req.query.danhmuc), catogoryDB.getCatogory()]).spread(function (temp1, temp2) {
      res.render("_productAuction/SPDAUGIA", {
        user: req.session.user,
        layout : "application",
        catogorylist : temp2,
        productlist : temp1,
        catogoryChoose : req.body.catogory
      });
    });
  }
}

module.exports = catogoryController;
