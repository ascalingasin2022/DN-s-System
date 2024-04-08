//Show password
function myFunction() {
  var x = document.getElementById("userInput");
	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}
}
function myFunction1() {
	var x = document.getElementById("signup_userInput");
	  if (x.type === "password") {
		  x.type = "text";
	  } else {
		  x.type = "password";
	  }
  }
function myFunction2() {
	var x = document.getElementById("repassword");
	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}
}

//validate password
function validatePassword(event) {
    event.preventDefault(); // Prevent form submission
    
    var password = document.getElementById("signup_userInput").value;
    var repassword = document.getElementById("repassword").value;
    
    if (password !== repassword) {
        alert("Passwords do not match. Please try again.");
        return false;
    }
    
    return true;
}

//change page
var login_form = document.getElementById("login_form");
var signUp_form = document.getElementById("signUp_form");

var signUpTitle = `Sign Up`;
var headTitle = document.getElementById("headTitle");
var originalheadTitle = headTitle.innerHTML;

function signUp() {
    login_form.style.top = "-430px";
    signUp_form.style.top = "-290px";
	document.querySelector('.headTitle').innerHTML = signUpTitle;
}
function logIn() {
    login_form.style.top = "40px";
    signUp_form.style.top = "150px";
	document.querySelector('.headTitle').innerHTML = originalheadTitle;
}
