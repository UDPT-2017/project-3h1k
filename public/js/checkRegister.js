function check_number(event) {
  if(event.keyCode >= 48 && event.keyCode <= 57){
    event.returnValue = true;
    return;
  }
  event.returnValue = false;
}
function check_character(event) {
  if(event.keyCode >= 48 && event.keyCode <= 57){
    event.returnValue = false;
    return;
  }
  event.returnValue = true;
}
function CheckRegister() {
    var email = $("#email").val();
    var password = $("#password").val();
    var configpassword = $("#confirm-password").val();
    var name = $("#fullname").val();
    var phone = $("#phone").val();
    var bool = true;

    if (email === "" && password === "" && configpassword === "" && name === "" && phone === "") {
        $("#error-inf").css("display", "block");
        $("#error-inf").html("Error: Enter all information !");
        $("#email-err").css("display", "none");
        $("#password-err").css("display", "none");
        $("#configpassword-err").css("display", "none");
        $("#name-err").css("display", "none");
        $("#phone-err").css("display", "none");
        return false;
    }
    else {
        $("#error-inf").css("display", "none");
    }
    if (email === "") {
        $("#email-err").css("display", "block");
        $("#email-err").html("Email is empty ! please check");
        bool = false;
    }else {
      $("#email-err").css("display", "none");
    }
    if (password === "") {
        $("#password-err").css("display", "block");
        $("#password-err").html("password is empty ! please check");
        bool = false;
    }else {
      $("#password-err").css("display", "none");
    }
    if (configpassword === "") {
        $("#configpassword-err").css("display", "block");
        $("#configpassword-err").html("configpassword is empty ! please check");
        bool = false;
    }else {
        $("#configpassword-err").css("display", "none");
    }
    if (name === "") {
        $("#name-err").css("display", "block");
        $("#name-err").html("name is empty ! please check");
        bool = false;
    }else {
        $("#name-err").css("display", "none");
    }
    if (phone === "") {
        $("#phone-err").css("display", "block");
        $("#phone-err").html("Phone is empty ! please check");
        bool = false;
    }else {
        $("#phone-err").css("display", "none");
    }
    if(bool === false) return false;
    if(password !== configpassword) {
      $("#error-inf").css("display", "block");
      $("#error-inf").html("Config password incorrect");
      $("#email-err").css("display", "none");
      $("#password-err").css("display", "none");
      $("#configpassword-err").css("display", "none");
      $("#name-err").css("display", "none");
      $("#phone-err").css("display", "none");
      return false;
    }else {
      $("#error-inf").css("display", "none");
    }
    return true;
}


/*
check_number: function (event) {
  if(event.keyCode >= 48 && event.keyCode <= 57){
    console.log(event.keyCode);
    event.returnValue = true;
    return;
  }
  event.returnValue = false;
}


*/
