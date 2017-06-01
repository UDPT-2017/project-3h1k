var userDB = require("../models/user.js");
var querystring = require('querystring');

var userController = {
  userCheckEmail : function (req, res) {
        var params = req.url.split('?')[1];
        var data   = querystring.parse(params);
        var email  = data.email;
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        userDB.findbyUserEmail(email).then(function (rows) {
            if (rows.length > 0) {
              res.write('"Email is already"');
            } else {
              res.write('"true"');
            }
            res.end();
        }).fail(function(err) {
            console.log(err);
            res.end('fail');
        });
  },
  userCheckName : function (req, res) {
    var params = req.url.split('?')[1].split('=')[1];
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    userDB.findbyUserName(params).then(function (rows) {
        if (rows.length > 0) {
          res.write('"Username is already"');
        } else {
          res.write('"true"');
        }
        res.end();
    }).fail(function(err) {
        console.log(err);
        res.end('fail');
    });
  }
}
module.exports = userController;
