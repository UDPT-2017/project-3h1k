var q = require('q');
var db = require("./database.js");
var home = {
    top5bestprice : function () {
      var d = q.defer();
      var sql = 'select b.proid, b.proname, b.tinydes, datediff(datefinish, NOW()) as songay, b.currentprice, count(a.productid) as soluotdaugia\
                from dackweb.bidhistory a right join dackweb.product b on a.productid = b.proid\
                group by b.proid, b.proname, b.tinydes, b.currentprice\
                order by b.currentprice DESC, count(a.productid) DESC\
                limit 0, 5;\
                ';
      db.query(sql,function (error, results) {
        if (error){
          d.reject(error);
        }
        d.resolve(results);
      });
      return d.promise;
    },
    top5mostauctionbid : function () {
      var d = q.defer();
      var sql = 'select b.proid, b.proname, b.tinydes, datediff(datefinish, NOW()) as songay, b.currentprice,  count(*) as soluotdaugia\
                  from dackweb.bidhistory a, dackweb.product b\
                  where a.productid = b.proid\
                  group by b.proid, b.proname, b.tinydes, b.currentprice\
                  order by count(*) DESC\
                  limit 0, 5;';
      db.query(sql,function (error, results) {
        if (error){
          d.reject(error);
        }
        d.resolve(results);
      });
      return d.promise;
    },
    top5cometoend : function () {
      var d = q.defer();
      var sql = 'select b.proid, b.proname, b.tinydes, datediff(datefinish, NOW()) as songay, b.currentprice, count(a.productid) as soluotdaugia\
                from dackweb.bidhistory a right join dackweb.product b on a.productid = b.proid\
                group by b.proid, b.proname, b.tinydes, b.currentprice\
                order by datediff(datefinish, NOW()) ASC\
                limit 0, 5;\
                ';
      db.query(sql,function (error, results) {
        if (error){
          d.reject(error);
        }
        d.resolve(results);
      });
      return d.promise;
    },
    getCatogory: function () {
      var d = q.defer();
      var sql = 'select catid, catname from category;';
      db.query(sql,function (error, results) {
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
        sql = 'select * from product and proname LIKE \'%?%\'';
        db.query(sql,[object.searchinput]function (error, results) {
          if (error){
            d.reject(error);
          }
          d.resolve(results);
        });
      }
      else {
        sql = 'select * from product a, category b where a.catid = b.catid and a.catid = ? and a.proname LIKE \'%?%\'';
        db.query(sql,[object.catogory, object.searchinput]function (error, results) {
          if (error){
            d.reject(error);
          }
          d.resolve(results);
        });
      }
      return d.promise;
    }
}
module.exports = home;
