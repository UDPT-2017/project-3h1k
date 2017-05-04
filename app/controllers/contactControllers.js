function checkname(name) {
  var resulf = name === undefined || name.trim() === "" || name.length === 0;
  return resulf;
}
function checkEmail() {}
function checktextaria() {}

var contactController = {
  show : function (req, res) {
    res.render("contact", {
      title: "HBS Contact PAGE",
      message: "Contact US",
      layout: "application"
    });
  },
  sendMessage : function (req, res) {
    // check name
    var name = req.body.name;
    console.log(checkname(name));
    if(checkname(name)) {
      res.render("contact", {
        title: "HBS Contact PAGE",
        message: "Contact US",
        layout: "application",
        FailMess : "Name you is error ! please try again"
      });
    }
    else {
      res.render("contact", {
        title: "HBS Contact PAGE",
        message: "Contact US",
        layout: "application",
        successMess : "You send success"
      });
    }
  }
}

module.exports = contactController;
