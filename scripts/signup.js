function validation() {
  var name = document.getElementById("name").value;
  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;
  var confirmpass = document.getElementById("conpass").value;
  var mobileNumber = document.getElementById("mobileNumber").value;
  var emails = document.getElementById("emails").value;

  var nameError = document.getElementById("Name");
  var emailError = document.getElementById("emailids");
  var usernameError = document.getElementById("username");
  var passwordError = document.getElementById("passwords");
  var confirmPassError = document.getElementById("confrmpass");
  var mobileError = document.getElementById("mobileno");

  nameError.innerHTML = emailError.innerHTML = usernameError.innerHTML = passwordError.innerHTML = confirmPassError.innerHTML = mobileError.innerHTML = "";

  if (name.trim() === "") {
      nameError.innerHTML = " ** Please fill the Name field";
      return false;
  }

  if (emails.trim() === "") {
      emailError.innerHTML = " ** Please fill the email id field";
      return false;
  }
  
  if (emails.indexOf("@") <= 0 || emails.indexOf(".") <= 0 || emails.lastIndexOf(".") < emails.indexOf("@")) {
      emailError.innerHTML = " ** Invalid Email";
      return false;
  }

  if (user.trim() === "") {
      usernameError.innerHTML = " ** Please fill the username field";
      return false;
  }
  
  if (user.length < 3 || user.length > 20 || !/^[a-zA-Z]+$/.test(user)) {
      usernameError.innerHTML = " ** Username length must be between 3 and 20, and only characters are allowed";
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

  if (confirmpass.trim() === "") {
      confirmPassError.innerHTML = " ** Please fill the confirm password field";
      return false;
  }

  if (pass !== confirmpass) {
      confirmPassError.innerHTML = " ** Password Mismatch";
      return false;
  }

  if (mobileNumber.trim() === "") {
      mobileError.innerHTML = " ** Please fill the mobile Number field";
      return false;
  }
  
  if (isNaN(mobileNumber)) {
      mobileError.innerHTML = " ** User must write digits only, not characters";
      return false;
  }
  
  if (mobileNumber.length !== 11) {
      mobileError.innerHTML = " ** Mobile Number must be 11 digits only";
      return false;
  }

  return true; // Validation passed
}
