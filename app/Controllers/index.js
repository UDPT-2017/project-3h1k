 var userController = require("./userControllers.js");
 var homeController = require("./homeControllers.js");
 var searchController = require("./searchControllers.js");
 var catogoryController = require("./catogoryControllers.js");

 module.exports = {
   home : homeController,
   user : userController,
   search : searchController,
   catogory  :catogoryController
 }
