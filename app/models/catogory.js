var db = require("./database.js");
var q = require('q');

var catogory = {
  getCatogory: function () {
    var d = q.defer();
    var sql = 'select catid, catname from category;';
    db.query(sql, function (error, results) {
      if (error){
        d.reject(error);
      }
      d.resolve(results);
    });
    return d.promise;
  },
  findCatogoryID: function (id) {
    var d = q.defer();
    var sql = 'select * from product where catid = ?';
    db.query(sql, [id], function (error, results) {
      if (error){
        d.reject(error);
      }
      d.resolve(results);
    });
    return d.promise;
  }
}

module.exports = catogory;
