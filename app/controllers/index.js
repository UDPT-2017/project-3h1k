// ket noi voi cac Controller


var homeController = require("./homeControllers.js");
var albumsController = require("./albumsControllers.js");
var contactController = require("./contactControllers.js");
var photoController = require("./photoControllers.js");

module.exports = {
  home : homeController,
  albums : albumsController,
  contact : contactController,
  photo : photoController
}
