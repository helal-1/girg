function check() {
  var password = "1012019";
  var input = document.getElementById("pass").value;

  if (input === password) {
    document.getElementById("login").style.display = "none";
    document.getElementById("content").style.display = "block";
  } else {
    document.getElementById("error").innerHTML = "كلمة السر غلط بس بحبك 😄❤️";
  }
}