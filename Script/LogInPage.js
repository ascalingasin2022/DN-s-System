function myFunction() {
    var x = document.getElementById("userInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }