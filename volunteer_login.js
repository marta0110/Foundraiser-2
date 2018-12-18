//donation_system one off payment events



$(".button_login_payment").on('click',function(){
   $(".login_system").slideToggle(), "slow";
   });


$(".sign_up_button").on('click',function(){
   $(".signup_system_step1").slideToggle(), "slow";
   });

$(".login_button").on('click',function(){
   $(".login_system").slideToggle(), "slow";

   });



$(".button_signup_volunteer").on('click',function(){
   $(".signup_system_step1").slideToggle(), "slow";

   });

//$("#confirm").on('click',function(){
// $(".signup_system").slideToggle(), "slow";
//  });
// 
console.log("hejsa")

const signup_system = document.querySelector(".signup_system");
const container= document.querySelector(".container");

function openReg(){
signup_system.style.display = "block";
container.style.display = "none";
}



function GoBack_v(){
	 window.location='volunteer_system.html'
}

