$(".button_login_payment").on("click", function() {
  $(".login_system").slideToggle(), "slow";
});
$(".sign_up_button").on("click", function() {
  $(".signup_system_step1").slideToggle(), "slow";
});
$(".login_button").on("click", function() {
  $(".login_system").slideToggle(), "slow";
});
$(".login_button_step1").on("click", function() {
  $(".login_system").slideToggle(), "slow";
  $(".signup_system_step1").slideToggle(), "slow";
});
$(".registerbutton").on("click", function() {
  $(".registration_complete").slideToggle(), "slow";
  $(".signup_system").slideToggle(), "slow";
});
$(".login_button_registration").on("click", function() {
  $(".login_system").slideToggle(), "slow";
  $(".registration_complete").slideToggle(), "slow";
});
$(".button_signup_volunteer").on("click", function() {
  $(".signup_system_step1").slideToggle(), "slow";
});
console.log("hejsa");
const signup_system = document.querySelector(".signup_system");
const container = document.querySelector(".step1 .container");
console.log("i test u");

function openReg() {
  document.querySelector(".signup_system").style.display = "block";
  document.querySelector(".container").style.display = "none";
  console.log("i test u 2");
}

function GoBack_v() {
  window.location = "volunteer_system.html";
}
