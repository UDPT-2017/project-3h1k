 var userController = require("./userControllers.js");
 var homeController = require("./homeControllers.js");
 var auctionitemController = require("./auctionitemController.js");
 module.exports = {
   home : homeController,
   user : userController,
   item : auctionitemController
 }
