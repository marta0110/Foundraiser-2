const endpoint = "https://5bfd717f827c3800139ae958.mockapi.io/donationdatabase";
const template = document.querySelector("#templateDonation").content;
const root = document.querySelector("main");
const addDonation = document.querySelector("#addNewDonation");
getAllDonations();
setHeader();
addDonation.addEventListener("submit", e => {
    e.preventDefault();
    addItem();
    localStorage.setItem("date", new Date())
});
console.log(localStorage.FName);
console.log(localStorage.LName);

function addItem() {
    const payload = {
        firstname: localStorage.FName,
        lastname: localStorage.LName,
        date: localStorage.date,
        amount: addDonation.elements.amount.value,
    };
    fetch(endpoint, {
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

function getAllDonations() {
    fetch(endpoint).then(res => res.json()).then(showAllDonations)
}

function showAllDonations(items) {
    items.forEach(showSingleDonation)
}

function showSingleDonation(item) {
    const clone = template.cloneNode(!0);
    clone.querySelector("p").textContent = item.amount;
    root.appendChild(clone)
}

function setHeader() {
    const UserName = localStorage.FName;
    const UserImage = localStorage.avatar;
    console.log(localStorage);
    console.log(localStorage.FName);
    console.log(localStorage.avatar);
    document.querySelector('#UserName').textContent = "Hello " + UserName + ",";
    document.getElementById('img').setAttribute("src", UserImage)
}
if (localStorage.getItem("avatar") === 'image/*') {
    document.getElementById('img').setAttribute("src", "images/username.png");
    console.log("avatar")
}

function logOut() {
    window.localStorage.clear();
    window.location = 'donation_system.html'
}