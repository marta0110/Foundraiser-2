//donation_system one off payment events

$(".button_one_payment").on('click',function(){
   $(".container_one_payment").slideToggle(), "slow";
   });


$(".button_login_payment").on('click',function(){
   $(".login_system").slideToggle(), "slow";
   });

function GoBack(){
	 window.location='donation_system.html'
}
