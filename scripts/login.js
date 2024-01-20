function validation() {
  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;
  var confirmpass = document.getElementById("confirmpass").value;

  var usernameError = document.getElementById("username");
  var passwordError = document.getElementById("passwords");
  var confirmPasswordError = document.getElementById("confrmpass");

  usernameError.innerHTML = passwordError.innerHTML = confirmPasswordError.innerHTML = "";

  if (user.trim() === "") {
      usernameError.innerHTML = " ** Please fill the username field";
      return false;
  }

  if (user.length < 2 || user.length > 20) {
      usernameError.innerHTML = " ** Username length must be between 2 and 20";
      return false;
  }

  if (!/^[a-zA-Z]+$/.test(user)) {
      usernameError.innerHTML = " ** Only characters are allowed";
      return false;
  }

  if (pass.trim() === "") {
      passwordError.innerHTML = " ** Please fill the password field";
      return false;
  }

  if (pass.length < 5 || pass.length > 20) {
      passwordError.innerHTML = " ** Password length must be between 5 and 20";
      return false;
  }

  if (pass !== confirmpass) {
      confirmPasswordError.innerHTML = " ** Password does not match the confirm password";
      return false;
  }

  return true; // Validation passed
}
