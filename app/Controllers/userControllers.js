var userDB = require("../models/user.js");
var querystring = require('querystring');
var Qs = require('q');
var objectUser = require("../Object/userObject.js");

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
     if ( Checking(req.body.address) || Checking(req.body.username) || Checking(req.body.password) || Checking(req.body.first_name) || Checking(req.body.last_name) || Checking(req.body.email)){
       req.flash("messagesFail", "Register is fail !!!");
       res.redirect("/register");
     }
     else {
       userDB.insertUser(req.body).then(function (rows) {
         req.flash("messagesSuccess", "Register is success !!!");
         res.redirect("/login");
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
            if(rows.length > 0) {
              var fullname = rows[0].f_Name.split(' ');
              var Firstname = fullname[0];
              var Lastname = fullname[1];
              var newuser = new objectUser(rows[0].f_Username, rows[0].f_Password, Firstname, Lastname, rows[0].f_Email, rows[0].f_DOB, rows[0].f_Permission);
              if(newuser.validPassword(req.body.password)) {
                  req.session.user = newuser;
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
    // user destroy
    req.session.destroy(); // huy session hien tai
    res.redirect('/');
  },
  getchangepassword: function (req, res) {
    res.render("_Users/changepassword", {
      successMess : res.locals.Success,
      FailMess : res.locals.Fail,
      layout: "applicationnoHeader"
    });
  },
  changepassword: function (req, res) {
    // chuc nang nay duoc su dung cho nhung ai da dang nhap
    if (Checking(req.body.oldpassword) || Checking(req.body.password) || Checking(req.body.conficpassword)){
      req.flash("messagesFail", "ChangePassword is fail !!!");
      res.redirect("/changepassword");
    } else {
      console.log(req.session.user);
       var userchange = new objectUser(req.session.user.Username,req.session.user.Password,req.session.user.Firstname,req.session.user.Lastname,req.session.user.Email, req.session.user.Days,req.session.user.Permission);
       if(userchange.validPassword(req.body.oldpassword)) {
         userchange.SettingPassword(userchange.encryptPassword(req.body.password));
         userDB.changepassword(userchange).then(function (rows) {
           req.session.user = userchange;
           req.flash("messagesSuccess", "Password is changed !");
           res.redirect("/changepassword");
         }).fail(function (err) {
           req.flash("messagesFail", "Password change fail ! Please try again");
           res.redirect("/changepassword");
         });
       } else {
         req.flash("messagesFail", "Old Password Incorrect !!!");
         res.redirect("/changepassword");
       }
    }
  },
  registerPage: function (req, res) {
    res.render("_featureWEB/register", {
        user: req.session.user,
        successMess : res.locals.Success,
        FailMess : res.locals.Fail,
        layout: "applicationnoHeader"
    });
  },
  loginPage: function (req, res) {
    res.render("_featureWEB/loginusers", {
        successMess : res.locals.Success,
        FailMess : res.locals.Fail,
        layout: "applicationnoHeader"
    });
  },
  testingCallback: function (req, res, next) {
      Qs.all([userDB.Testing1(), userDB.Testing2()]).spread(function (a, b) {
          console.log(a);
          console.log("=================");
          console.log(b);
      });
  }
  // chi la test callback ma thoi
}
module.exports = userController;
