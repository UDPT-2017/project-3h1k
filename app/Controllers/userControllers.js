var userDB = require("../models/user.js");
var querystring = require('querystring');
var Qs = require('q');

function Checking(value) {
  var resulf = value === undefined || value.trim() === "" || value.length === 0;
  return resulf;
}

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
  },
  userRegister: function (req, res) {
     if (Checking(req.body.username) || Checking(req.body.password) || Checking(req.body.first_name) || Checking(req.body.last_name) || Checking(req.body.email)){
       req.flash("messagesFail", "Register is fail !!!");
       res.redirect("/register");
     }
     else {
       userDB.insertUser(req.body).then(function (rows) {
         req.flash("messagesSuccess", "Register is success !!!");
         res.redirect("/test2");
       }).fail(function (err) {
         req.flash("messagesFail", "Register is fail !!!");
         res.redirect("/register");
       });
     }
  },
  userLogin: function (req, res) {
      // khuc nay viet dang nhap
      // kiem tra xem co bi hack hay ko
      if (Checking(req.body.username) || Checking(req.body.password)){
        req.flash("messagesFail", "LogIn is fail !!!");
        res.redirect("/login");
      }else {
        userDB.findbyUserName(req.body.username).then(function (rows) {
            // rows chi co dung 1 dong --> truoc tien ta cu lam the nay da xem sao
            if(rows.length > 0) {
              var password_User = rows[0].f_Password;
              if(password_User === req.body.password) {
                  res.redirect("/profile");
              }else {
                req.flash("messagesFail", "LogIn is fail !!!");
                res.redirect("/login");

              }
            }
            else {
              req.flash("messagesFail", "Username is not exists");
              res.redirect("/login");
            }
        })

      }
  },
  userLogout: function (req, res) {

  },
  testingCallback: function (req, res, next) {
      Qs.all([userDB.Testing1(), userDB.Testing2()]).spread(function (a, b) {
          console.log(a);
          console.log("=================");
          console.log(b);
      });
  }
}
module.exports = userController;
