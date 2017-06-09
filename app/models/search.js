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
      sql = 'select * from product a, category b where a.catid = b.catid and proname LIKE ?';
      db.query(sql,['%' + object.searchinput + '%'], function (error, results) {
        if (error){
          d.reject(error);
        }
        d.resolve(results);
      });
      return d.promise;
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
  },
  getRowPro: function () {
    var d = q.defer();
    var sql = 'select count(*) from product'
    connection.query(sql, function(err, results) {
          if (err){
           d.reject(err);
          }
          d.resolve(results);
     });
    return d.promise;
  },
  getPageNumber: function (start, pageSize, object, typePage) {
    var d = q.defer();

    if(typePage == 1){
      if(object.catogory == 0){
        var sql1 = 'select b.proid, b.proname, b.tinydes, datediff(datefinish, NOW()) as songay, b.currentprice, count(a.productid) as soluotdaugia\
                  from bidhistory a right join product b on a.productid = b.proid\
                  where b.proname LIKE ?\
                  group by b.proid, b.proname, b.tinydes, b.currentprice\
                  order by b.currentprice ASC\
                  LIMIT ? , ?;'
      } else {
        var sql1 = 'select b.proid, b.proname, b.tinydes, datediff(datefinish, NOW()) as songay, b.currentprice, count(a.productid) as soluotdaugia\
                  from bidhistory a right join product b on a.productid = b.proid\
                  where b.catid = ? and b.proname LIKE ?\
                  group by b.proid, b.proname, b.tinydes, b.currentprice\
                  order by b.currentprice ASC\
                  LIMIT ? , ?;'
      }
    }
    else if (typePage == 0) {
      if(object.catogory == 0){
        var sql1 = 'select b.proid, b.proname, b.tinydes, datediff(datefinish, NOW()) as songay, b.currentprice, count(a.productid) as soluotdaugia\
                  from bidhistory a right join product b on a.productid = b.proid\
                  where b.proname LIKE ?\
                  group by b.proid, b.proname, b.tinydes, b.currentprice\
                  LIMIT ? , ?;'
      }
      else {
        var sql1 = 'select b.proid, b.proname, b.tinydes, datediff(datefinish, NOW()) as songay, b.currentprice, count(a.productid) as soluotdaugia\
                  from bidhistory a right join product b on a.productid = b.proid\
                  where b.catid = ? and b.proname LIKE ?\
                  group by b.proid, b.proname, b.tinydes, b.currentprice\
                  LIMIT ? , ?;'
      }

    }
    else if (typePage == 2) {
      if(object.catogory == 0){
        var sql1 = 'select b.proid, b.proname, b.tinydes, datediff(datefinish, NOW()) as songay, b.currentprice, count(a.productid) as soluotdaugia\
                  from bidhistory a right join product b on a.productid = b.proid\
                  where b.proname LIKE ?\
                  group by b.proid, b.proname, b.tinydes, b.currentprice\
                  order by count(a.productid) DESC\
                  LIMIT ? , ?;'
      }
      else {
        var sql1 = 'select b.proid, b.proname, b.tinydes, datediff(datefinish, NOW()) as songay, b.currentprice, count(a.productid) as soluotdaugia\
                  from bidhistory a right join product b on a.productid = b.proid\
                  where b.catid = ? and b.proname LIKE ?\
                  group by b.proid, b.proname, b.tinydes, b.currentprice\
                  order by count(a.productid) DESC\
                  LIMIT ? , ?;'
      }

    }
    if (object.catogory == 0) {
      db.query(sql1,['%' + object.searchinput + '%',start, pageSize], function(err, data) {
            if (err){
             d.reject(err);
            }
            d.resolve(data);
       });
       return d.promise;
    } else {
      db.query(sql1,[object.catogory,'%' + object.searchinput + '%',start, pageSize], function(err, data) {
            if (err){
             d.reject(err);
            }
            d.resolve(data);
       });
       return d.promise;
    }
  }
}
module.exports = search;
