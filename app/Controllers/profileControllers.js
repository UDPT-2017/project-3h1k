var profileController = {
  Defaultpage : function (req, res) {
    res.render("profiletest", {
        user: req.session.user,
        layout: "applicationnoHeader"
    });
  }
}

module.exports = profileController;
