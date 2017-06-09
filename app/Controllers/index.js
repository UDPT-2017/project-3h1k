 var userController = require("./userControllers.js");
 var homeController = require("./homeControllers.js");
 var searchController = require("./searchControllers.js");
 var catogoryController = require("./catogoryControllers.js");
 var aboutController = require("./aboutControllers.js");
 var contactController = require("./contactControllers.js");
 var locationController = require("./locationControllers.js");
 var profileController = require("./profileControllers.js");
 module.exports = {
   home : homeController,
   user : userController,
   search : searchController,
   catogory  :catogoryController,
   about : aboutController,
   contact : contactController,
   location : locationController,
   profile : profileController
 }
