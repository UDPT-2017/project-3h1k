var bcrypt = require('bcrypt-nodejs');

module.exports = function (username, password, first_name, last_name, email, day, permission) {
  this.Username = username;
  this.Password = password;
  this.Firstname = first_name;
  this.Lastname = last_name;
  this.Days = day;
  this.Permission = permission;
  this.Email = email;

  this.encryptPassword = function (password) {
      return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
  }

  this.validPassword = function (password) {
    return bcrypt.compareSync(password, this.Password); // return true or false
  }

  this.SettingPassword = function (newpassword) {
    this.Password = newpassword;
  }
}
