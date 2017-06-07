var db = require("./database.js");
var q = require('q');

var search = {
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
  searchPage: function (object) {
    var d = q.defer();
    var sql = '';
    if(object.catogory == 0){
      console.log("1");
      sql = 'select * from product and proname LIKE \'%?%\'';
      db.query(sql,[object.searchinput], function (error, results) {
        if (error){
          d.reject(error);
        }
        d.resolve(results);
      });
    }
    else {
      sql = 'select * from product a, category b where a.catid = b.catid and a.catid = ? and a.proname LIKE ?;';
      db.query(sql, [object.catogory, '%' + object.searchinput + '%'], function (error, results) {
        if (error){
          d.reject(error);
        }
        d.resolve(results);
      });
      return d.promise;
    }
  }
}
module.exports = search;
