const endpointR = "https://5bff9c6d0296210013dc7df1.mockapi.io/api/v1/users";
const registerbutton = document.querySelector('#registerbutton')
const registerform = document.querySelector('.register-form');


registerform.addEventListener("submit", e => {
            e.preventDefault();
            addNewUser();
        });

//sending data to database
function  addNewUser(){

		checkUser();
// here add the check Existing user as a condition if the username doesn't exist, then execute the following, else alert message
    const payload = {
        FName: registerform.elements.FName.value,
        LName: registerform.elements.LName.value,
        username: registerform.elements.username.value,
        password: registerform.elements.password.value,
        email: registerform.elements.email.value,
		avatar: registerform.elements.pic.accept,

    };
	
  fetch(endpointR, {
        method :"post",
        body: JSON.stringify(payload),
        headers: {
            Accept : "application/json",
            "Content-Type":"application/json"
        }
    })
    .then(res => res.json())
    .then(d => {
        console.log(d);
	  saveInfo(d);
    })
	
	
function saveInfo(data){
	console.log(data);
  
	
	  document.querySelector('.name').textContent = data.FName;
	document.querySelector('.mail').textContent = data.email;
	
	
}
	
}

   function getAllUsers() {
            fetch(endpointR)
                .then(res => res.json())
                .then(showAllUsers)
        }

        function showAllUsers(users) {
            users.forEach(showSingleUser)
        }

        function showSingleUser(users) {
            const clone = template.cloneNode(true);
          
        
            root.appendChild(clone);

        }


 //user already exists

function checkUser(ExistingUser){

	fetch('https://5bff9c6d0296210013dc7df1.mockapi.io/api/v1/users?search=' + username)
    .then(res=>res.json())
    .then(data=>{
        console.log("lala")
		 console.log(data[0].username)
        if(data.username == username){
			   console.log("lala2")
			 
document.querySelector(".wrong_username").textContent= "This username already exists";
 
        } 
      
    })
}









