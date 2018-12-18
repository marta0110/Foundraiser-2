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
	$(".signup_system").slideToggle(), "slow";
   });


$("#confirm").on('click',function(){
 $(".signup_system").slideToggle(), "slow";
});

$(".button_signup_volunteer").on('click',function(){
   $(".signup_system_step1").slideToggle(), "slow";

   });
 





function GoBack(){
	 window.location='donation_system.html'
}
