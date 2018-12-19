
// menu transitions on donation_loggedin.html
let wrapperMenu = document.querySelector('.wrapper-menu');
let timesClicked = 0;

wrapperMenu.onclick = function () {
	timesClicked++;

	if (timesClicked % 2 == 0) {
	document.getElementById("mySidenav").style.width = "0";
	wrapperMenu.classList.toggle('open');
	console.log("close");
} else {
	wrapperMenu.classList.toggle('open');
	document.getElementById("mySidenav").style.width = "50%";
	console.log("open");
	}
}
