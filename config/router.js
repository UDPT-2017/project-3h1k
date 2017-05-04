
var Router = require("express").Router;

var index = require("../app/controllers/index.js");

module.exports = function(app) {

  var homeRouter = Router()
    .get("/", index.home.defaultpage);

  var albumsRouter = Router()
    .get("/", index.albums.defaultpage);

  var photoRouter = Router()
    .get("/", index.photo.defaultpage)
    .get("/:id", index.photo.SinglePhoto );

  var contactRouter = Router()
    .get("/", index.contact.show)
    .post("/", index.contact.sendMessage);

  app.use("/", homeRouter);
  app.use("/albums", albumsRouter);
  app.use("/photo", photoRouter);
  app.use("/contact", contactRouter);
  // xet Router

  /*app.get("/",  );
  app.get("/albums", index.albums.defaultpage );
  app.get("/photo", index.photo.defaultpage);
  app.get("/singlePhoto/:id", index.photo.SinglePhoto );
  app.get("/contact", index.contact.show);
  app.post("/contact", index.contact.sendMessage);*/
}
