//donation_system one off payment events

$(".button_one_payment").on('click',function(){
   $(".container_one_payment").slideToggle(), "slow";
   });


$(".button_login_payment").on('click',function(){
   $(".login_system").slideToggle(), "slow";
   });

$(".button_signup").on('click',function(){
   $(".signup_system").slideToggle(), "slow";
   });

$(".sign_up_button").on('click',function(){
   $(".signup_system").slideToggle(), "slow";
   });

$(".login_button").on('click',function(){
   $(".login_system").slideToggle(), "slow";
   });

$("#registerbutton").on('click',function(){
 $(".registration_complete").slideToggle(), "slow";
});

$("#confirm").on('click',function(){
 $(".signup_system").slideToggle(), "slow";
});


function GoBack(){
	 window.location='donation_system.html'
}
