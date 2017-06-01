var db = require("./database.js");
var q = require('q');

var user = {
  findbyUserEmail: function (email) {
    var d = q.defer();
    var sql = 'Select f_Email from users where f_Email = ?';
    db.query(sql, [email],function (error, results) {
      if (error){
        d.reject(error);
      }
      d.resolve(results);
    });
    return d.promise;
  },
  findbyUserName: function (username, callback) {
    var d = q.defer();
    var sql = 'Select f_Username from users where f_Username = ?';
    db.query(sql, [username],function (error, results) {
      if (error){
        d.reject(error);
      }
      d.resolve(results);
    });
    return d.promise;
  }
}

module.exports = user;
