//donation_system one off payment events

$(".button_one_payment").on('click', function () {
	$(".container_one_payment").slideToggle(), "slow";
	$(".container").slideToggle(), "slow";
});


$(".button_login_payment").on('click', function () {
	$(".login_system").slideToggle(), "slow";
});

$(".button_signup").on('click', function () {
	$(".signup_system").slideToggle(), "slow";
});

$(".sign_up_button").on('click', function () {
	$(".signup_system").slideToggle(), "slow";
});

$(".login_button").on('click', function () {
	$(".login_system").slideToggle(), "slow";
	$(".signup_system").slideToggle(), "slow";
});


$(".login_button_registration").on('click', function () {
	$(".login_system").slideToggle(), "slow";
	$(".registration_complete").slideToggle(), "slow";
});


$(".button_signup_volunteer").on('click', function () {
$(".signup_system_step1").slideToggle(), "slow";

});

// DONATE BUTTON WITHOUT LOGIN 
$(".one_type_donation").on('click', function () {
$(".donation_complete_notlogedin").slideToggle(), "slow";
$(".container_one_payment").slideToggle(), "slow";
});




$("#confirm").on('click', function () {
	$(".signup_system").slideToggle(), "slow";
});



// DONATE BUTTON WITH LOGIN 

$(".donation_login").on('click',function(){
 $(".donation_complete_logged_in").slideToggle(), "slow";
	$(".support").css("margin-top", "25vh");
$("#container_payment_loggedin").slideToggle(), "slow";
	 
	
  });

//const donation_complete = document.querySelector(".donation_complete")
//
//const one_payment = document.querySelector("#addNewDonation")
//
//function thanks() {
//donation_complete.style.display = "block";
//one_payment.style.visibility = "hidden";
//}

//console.log("hejsa")
//
//const signup_system = document.querySelector(".signup_system");
//const container= document.querySelector(".container");
//
//function openReg(){
//signup_system.style.display = "block";
//container.style.display = "none";
//}
//

function MainPage(){
	 window.location='homepage.html'
}

function GoBack() {
	window.location = 'donation_system.html'
}
