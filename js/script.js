$(".message a").on("click", function() {
  $("form").slideToggle(), "slow";
});
const Reg_name = document.getElementById("name");
const Reg_pw = document.getElementById("pw");

function store() {
  localStorage.setItem("name", Reg_name.value);
  localStorage.setItem("pw", Reg_pw.value);
}

function check() {
  var storedName = localStorage.getItem("name");
  var storedPw = localStorage.getItem("pw");
  var userName = document.getElementById("user_name");
  var userPw = document.getElementById("user_pw");
  if (userName.value == storedName && userPw.value == storedPw) {
    alert("You are loged in.");
  } else {
    alert("ERROR.");
  }
}
