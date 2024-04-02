function myFunction() {
  var x = document.getElementById("userInput");
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

// sign up form on click function
var loginform = document.getElementById("login_form");
var originalLoginForm = loginform.innerHTML;

function showSignUpForm() {
	var signUpForm = `
		<h1>Sign Up</h1>
		<form class="form_container" onsubmit="return validatePassword(event)">
			<label for="name" class="label">Name</label>
			<input 
				placeholder="Enter your name"
				class="input" 
				type="text"
				required>
			<label for="phoneNum" class="label">Phone No.</label>
			<input 
				placeholder="09xxxxxxxxx"
				class="input" 
				type="tel"
				pattern="09[0-9]{2}[0-9]{3}[0-9]{4}"
				title="It must contain 11-digit number in PH format(09xxxxxxxxx)."
				required>
			<label for="password" class="label">Password</label>
			<input 
				placeholder="Enter your password"
				id="userInput"
				class="input" 
				type="password"
				pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
				title="Must contain at least one number, one uppercase, one lowercase letter, and at least 8 or more characters"
				required>
			<div class="encrypt">
				<input type="checkbox" onclick="myFunction()">
				<p>Show Password</p>
			</div>
			<label for="repassword" class="label">Re-Password</label>
			<input 
				placeholder="Re-enter your password"
				id="repassword"
				class="input" 
				type="password"
				pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
				title="Must contain at least one number, one uppercase, one lowercase letter, and at least 8 or more characters"
				required>
			<div class="encrypt">
				<input type="checkbox" onclick="myFunction2()">
				<p>Show Password</p>
			</div>
			<input type="submit" value="Submit" class="button">
			<div class="text">
				<p>Already have an account? <a href="#" onclick="showLoginForm()">Click Here</a></p>
			</div>
		</form>
	`;
	document.querySelector('.login_form').innerHTML = signUpForm;
}

function showLoginForm() {
	document.querySelector('.login_form').innerHTML = originalLoginForm;
}

function validatePassword(event) {
    event.preventDefault(); // Prevent form submission
    
    var password = document.getElementById("userInput").value;
    var repassword = document.getElementById("repassword").value;
    
    if (password !== repassword) {
        alert("Passwords do not match. Please try again.");
        return false;
    }
    
    return true;
}
