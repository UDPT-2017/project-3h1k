var db = require("./database.js");
var q = require('q');

var catogory = {
    getCatogory: function() {
        var d = q.defer();
        var sql = 'select catid, catname from category;';
        db.query(sql, function(error, results) {
            if (error) {
                d.reject(error);
            }
            d.resolve(results);
        });
        return d.promise;
    },
    findCatogoryID: function(id) {
        var d = q.defer();
        var sql = 'select * from product where catid = ?';
        db.query(sql, [id], function(error, results) {
            if (error) {
                d.reject(error);
            }
            d.resolve(results);
        });
        return d.promise;
    },
    getPageNumber: function(start, pageSize, object, typePage) {
      console.log("abc");
      console.log(start + " : " + pageSize + " : " + object + " : " + typePage);
      var d = q.defer();

      if (typePage == 1) {
          if (object == 0) {

          } else {
              var sql1 = 'select b.proid, b.proname, b.tinydes, datediff(datefinish, NOW()) as songay, b.currentprice, count(a.productid) as soluotdaugia\
                from bidhistory a right join product b on a.productid = b.proid\
                where b.catid = ?\
                group by b.proid, b.proname, b.tinydes, b.currentprice\
                order by b.currentprice ASC\
                LIMIT ? , ?;'
          }
      } else if (typePage == 0) {
          if (object == 0) {

          } else {
              var sql1 = 'select b.proid, b.proname, b.tinydes, datediff(datefinish, NOW()) as songay, b.currentprice, count(a.productid) as soluotdaugia\
                from bidhistory a right join product b on a.productid = b.proid\
                where b.catid = ?\
                group by b.proid, b.proname, b.tinydes, b.currentprice\
                LIMIT ? , ?;'
          }
      } else if (typePage == 2) {
          if (object == 0) {

          } else {
              var sql1 = 'select b.proid, b.proname, b.tinydes, datediff(datefinish, NOW()) as songay, b.currentprice, count(a.productid) as soluotdaugia\
                from bidhistory a right join product b on a.productid = b.proid\
                where b.catid = ?\
                group by b.proid, b.proname, b.tinydes, b.currentprice\
                order by count(a.productid) DESC\
                LIMIT ? , ?;'
          }
      }
      db.query(sql1, [object, start, pageSize], function(err, data) {
          if (err) {
              d.reject(err);
          }
          d.resolve(data);
      });
      return d.promise;
    }
}

module.exports = catogory;
