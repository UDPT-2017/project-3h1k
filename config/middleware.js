

var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var session = require("express-session");
var cookieParser = require("cookie-parser");

module.exports = function (app) {
  app.use(express.static("public"));

  app.use("/component", express.static("bower_components"));

  app.use(bodyParser.urlencoded({
      extended: true
  }));
  app.use(cookieParser());
  app.use(session({secret: "asd7asd91y3h12h"}));
}
