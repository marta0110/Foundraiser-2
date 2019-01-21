const endpointVolunteer = "https://5c34c658ae60ba0014da4268.mockapi.io/volunteers";

const addVolunteer = document.querySelector("#addNewVolunteer");
const template2 = document.querySelector("#templateVolunteer").content;
const root2 = document.querySelector(".mainVolunteer");


getAllVolunteer();


addVolunteer.addEventListener("submit", e => {
    e.preventDefault();
    addHelp();
    localStorage.setItem("date", new Date())
});
console.log(localStorage.FName);
console.log(localStorage.LName);



function addHelp() {
    const payload = {
        firstname: localStorage.FName,
        lastname: localStorage.LName,
        date: localStorage.date,
        volunteer: addVolunteer.elements.volunteer.value,
    };
	
	
    fetch(endpointVolunteer, {
        method: "post",
        body: JSON.stringify(payload),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    }).then(res => res.json()).then(d => {
        console.log(d);
        console.log(d.firstname)
        console.log(payload)
    })
}

function getAllVolunteer() {
    fetch(endpointVolunteer).then(res => res.json()).then(showAllVolunteer)
}

function showAllVolunteer(items) {
    items.forEach(showSingleVolunteer)
}

function showSingleVolunteer(item) {
    const clone = template2.cloneNode(!0);
    clone.querySelector("p").textContent = item.volunteer;
    root2.appendChild(clone)
}




