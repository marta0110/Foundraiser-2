const loginbutton = document.querySelector('#loginbutton')
const loginform = document.querySelector('.login-form');
loginform.addEventListener('submit', (e) => {
	e.preventDefault()
	const user = loginform.elements.username.value;
	console.log(user)

	const password = loginform.elements.password.value;
	console.log("pw", password)
	//checkPassword(password)
	checkLogin(user, password)
})


// login form - check does the user is in database, wrote correct information - if yes - go to login page

function checkLogin(username, password) {
	console.log(username + password)
fetch('https://5bff9c6d0296210013dc7df1.mockapi.io/api/v1/users?search=' + username)
		.then(res => res.json())
		.then(data => {
			//console.log("data: ", data[0].password);
console.log(data)
if (data.length == 0) {
document.querySelector(".wrong_data").textContent = "Please insert correct data";
onsole.log("wrong data");
}
	
	if (data[0].username == username && data[0].password == password) {

				console.log("test")

				localStorage.setItem('name', data[0].username);
				localStorage.setItem('FName', data[0].FName);
				localStorage.setItem('LName', data[0].LName);
				localStorage.setItem('avatar', data[0].avatar);
				localStorage.setItem('id', data[0].id);
				window.location = 'donation_loggedin.html';
				//data is incorrect
			} else {
document.querySelector(".wrong_data").textContent = "Please insert correct data";
			}
		})
}