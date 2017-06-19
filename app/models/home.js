var q = require('q');
var db = require("./database.js");
var home = {
    top5bestprice : function () {
      var d = q.defer();
      /*var sql = 'select b.proid, b.proname, b.tinydes, datediff(datefinish, NOW()) as songay, b.currentprice, count(a.productid) as soluotdaugia\
                from bidhistory a right join product b on a.productid = b.proid\
                group by b.proid, b.proname, b.tinydes, b.currentprice\
                order by b.currentprice DESC, count(a.productid) DESC\
                limit 0, 5;\
                ';
      */
      var sql = 'select b.image1, b.proid, b.proname, b.tinydes, DATE_FORMAT(b.datefinish,\'%Y-%m-%d %H:%i:%s\') sogiay,\
                  case\
                            when a.price is null then b.startprice \
                            when a.price is not null then a.price\
                  end as priceAuction, \
                  case \
                            when a.userid is null then "No Bid"\
                            when a.userid is not null then a.userid\
                  end as userBid, \
                  case \
                             when  (select count(*)  \
                             from bidhistory history\
                             where history.productid = b.proid\
                             group by history.productid) is null then 0\
                           when  (select count(*)  \
                             from bidhistory history\
                             where history.productid = b.proid\
                             group by history.productid) is not null then (select count(*)  \
                                                 from bidhistory history\
                                                 where history.productid = b.proid\
                                                 group by history.productid)\
                  end as soluotdaugia\
                  from bidhistory a right join product b on a.productid = b.proid\
                  and not exists (\
                              select *\
                                          from bidhistory c\
                              where c.productid = a.productid\
                                          and a.userid = c.userid\
                                          and  exists(\
                                        select * \
                                                              from bidhistory e \
                                                              where e.productid = c.productid\
                                                              and a.price < e.price\
                                    )\
                         )\
                  group by b.proid, b.proname, b.tinydes, TIMESTAMPDIFF(Second , now() , b.datefinish), a.price, a.userid\
                  order by \
                  case\
                      when a.price is null then b.startprice \
                      when a.price is not null then a.price\
                  end ASC\
                  LIMIT 0 , 5;';
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
      /*var sql = 'select b.proid, b.proname, b.tinydes, datediff(datefinish, NOW()) as songay, b.currentprice,  count(*) as soluotdaugia\
                  from bidhistory a, product b\
                  where a.productid = b.proid\
                  group by b.proid, b.proname, b.tinydes, b.currentprice\
                  order by count(*) DESC\
                  limit 0, 5;';
      */
      var sql = 'select b.image1, b.proid, b.proname, b.tinydes, DATE_FORMAT(b.datefinish,\'%Y-%m-%d %H:%i:%s\') sogiay,\
                  case\
                            when a.price is null then b.startprice \
                            when a.price is not null then a.price\
                  end as priceAuction, \
                  case \
                            when a.userid is null then "No Bid"\
                            when a.userid is not null then a.userid\
                  end as userBid, \
                  case \
                             when  (select count(*)  \
                             from bidhistory history\
                             where history.productid = b.proid\
                             group by history.productid) is null then 0\
                           when  (select count(*)  \
                             from bidhistory history\
                             where history.productid = b.proid\
                             group by history.productid) is not null then (select count(*)  \
                                                 from bidhistory history\
                                                 where history.productid = b.proid\
                                                 group by history.productid)\
                  end as soluotdaugia\
                  from bidhistory a right join product b on a.productid = b.proid\
                  and not exists (\
                              select *\
                                          from bidhistory c\
                              where c.productid = a.productid\
                                          and a.userid = c.userid\
                                          and  exists(\
                                        select * \
                                                              from bidhistory e \
                                                              where e.productid = c.productid\
                                                              and a.price < e.price\
                                    )\
                         )\
                  group by b.proid, b.proname, b.tinydes, TIMESTAMPDIFF(Second , now() , b.datefinish), a.price, a.userid\
                  order by \
                  case \
                           when  (select count(*)  \
                             from bidhistory history\
                             where history.productid = b.proid\
                             group by history.productid) is null then 0\
                           when  (select count(*)  \
                             from bidhistory history \
                             where history.productid = b.proid\
                             group by history.productid) is not null then (select count(*)  \
                                                 from bidhistory history\
                                                 where history.productid = b.proid \
                                                 group by history.productid) \
                  end  DESC \
                  LIMIT 0 , 5;';
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
      /*var sql = 'select b.proid, b.proname, b.tinydes, datediff(datefinish, NOW()) as songay, b.currentprice, count(a.productid) as soluotdaugia\
                from bidhistory a right join product b on a.productid = b.proid\
                group by b.proid, b.proname, b.tinydes, b.currentprice\
                order by datediff(datefinish, NOW()) ASC\
                limit 0, 5;\
                ';
      */
      var sql = 'select b.image1, b.proid, b.proname, b.tinydes, DATE_FORMAT(b.datefinish,\'%Y-%m-%d %H:%i:%s\') sogiay,\
                  case\
                            when a.price is null then b.startprice \
                            when a.price is not null then a.price\
                  end as priceAuction, \
                  case \
                            when a.userid is null then "No Bid"\
                            when a.userid is not null then a.userid\
                  end as userBid, \
                  case \
                             when  (select count(*)  \
                             from bidhistory history\
                             where history.productid = b.proid\
                             group by history.productid) is null then 0\
                           when  (select count(*)  \
                             from bidhistory history\
                             where history.productid = b.proid\
                             group by history.productid) is not null then (select count(*)  \
                                                 from bidhistory history\
                                                 where history.productid = b.proid\
                                                 group by history.productid)\
                  end as soluotdaugia\
                  from bidhistory a right join product b on a.productid = b.proid\
                  and not exists (\
                              select *\
                                          from bidhistory c\
                              where c.productid = a.productid\
                                          and a.userid = c.userid\
                                          and  exists(\
                                        select * \
                                                              from bidhistory e \
                                                              where e.productid = c.productid\
                                                              and a.price < e.price\
                                    )\
                         )\
                  group by b.proid, b.proname, b.tinydes, TIMESTAMPDIFF(Second , now() , b.datefinish), a.price, a.userid\
                  order by TIMESTAMPDIFF(Second , now() , b.datefinish) ASC \
                  LIMIT 0 , 5;';
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
      db.query(sql, function (error, results) {
        if (error){
          d.reject(error);
        }
        d.resolve(results);
      });
      return d.promise;
    }
}
module.exports = home;
