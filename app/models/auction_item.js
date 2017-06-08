var q = require('q');
var db = require("./database.js");
var mustache = require('mustache');
var item = {
  loadWithID : function (proId) {
    var d = q.defer();
    var obj = {
      proID: proId
    };
    var sql = mustache.render('select * from product where proid = {{proID}}',obj);
    console.log(sql);
    db.query(sql,function (error, results) {
      if (error){
        d.reject(error);
      }
      d.resolve(results[0]);
    });
    return d.promise;
  },
  loadSellerInfo : function (proId) {
    var d = q.defer();
    var obj = {
      proID: proId
    };
    var sql = mustache.render('SELECT user.f_Username, user.f_Name, user.f_Email  FROM product,user where product.sellerid = user.f_ID and proid = {{proID}}',obj);
    console.log(sql);
    db.query(sql,function (error, results) {
      if (error){
        d.reject(error);
      }
      console.log(results[0]);
      d.resolve(results[0]);
    });
    return d.promise;
  },
  loadHighestBuyerInfo : function (proId) {
    var d = q.defer();
    var obj = {
      proID: proId
    };
    var sql = mustache.render('SELECT user.f_Username, user.f_Name, user.f_Email  FROM product,user where product.highestbuyerid = user.f_ID and proid = {{proID}}',obj);
    console.log(sql);
    db.query(sql,function (error, results) {
      if (error){
        d.reject(error);
      }
      console.log(results[0]);
      d.resolve(results[0]);
    });
    return d.promise;
  },
  loadTotalItemSeller : function (proId) {
    var d = q.defer();
    var obj = {
      proID: proId
    };
    var sql = mustache.render('SELECT count(proid) as totalitems FROM product where sellerid in (select sellerid from product where proid = {{proID}})',obj);
    console.log(sql);
    db.query(sql,function (error, results) {
      if (error){
        d.reject(error);
      }
      console.log(results[0]);
      d.resolve(results[0]);
    });
    return d.promise;
  },
  loadTotalPersonBid : function (proId) {
    var d = q.defer();
    var obj = {
      proID: proId
    };
    var sql = mustache.render('select count(userid) as count from bidhistory where productid = {{proID}}',obj);
    console.log(sql);
    db.query(sql,function (error, results) {
      if (error){
        d.reject(error);
      }
      console.log(results[0]);
      d.resolve(results[0]);
    });
    return d.promise;
  },
  loadBidHistory : function (proId) {
    var d = q.defer();
    var obj = {
      proID: proId
    };
    var sql = mustache.render('SELECT user.f_Name, bidhistory.timebid, bidhistory.price FROM bidhistory, user where bidhistory.productid = {{proID}} and bidhistory.userid = user.f_ID order by timebid desc',obj);
    console.log(sql);
    db.query(sql,function (error, results) {
      if (error){
        d.reject(error);
      }
      console.log(results);
      d.resolve(results);
    });
    return d.promise;
  },
  loadComment : function (proId) {
    var d = q.defer();
    var obj = {
      proID: proId
    };
    var sql = mustache.render('SELECT user.f_Name, comment.datepost, comment.content FROM comment, user where productid = {{proID}} and comment.userid = user.f_ID order by datepost desc',obj);
    console.log(sql);
    db.query(sql,function (error, results) {
      if (error){
        d.reject(error);
      }
      console.log(results);
      d.resolve(results);
    });
    return d.promise;
  }
}

module.exports = item;
