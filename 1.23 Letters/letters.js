"use strict";

document.getElementById("zoeken").onclick = function () {
    const lettersInput = document.getElementById("letters");
    const lettersFout = document.getElementById("lettersFout");
    if (lettersInput.value === "") {
        lettersFout.hidden = false;
        lettersInput.focus();
    } else {
        lettersFout.hidden = true;
        leesUsers();
    }
}

async function leesUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const nietGevondenDiv = document.getElementById("nietGevonden");
    if (response.ok) {
        nietGevondenDiv.hidden = true;
        const users = await response.json();
        //console.log(users);
        verwerkUsers(users);
    } else {
        nietGevondenDiv.hidden = false;
    }

}

function verwerkUsers(users) {
    const letters = document.getElementById("letters").value;
    const ul = document.getElementById("users");
    verwijderAlleChildElementenVan(ul);
    for (const user of users) {
        if (user.name.includes(letters)) {
            const hyperlink = document.createElement("a");
            hyperlink.innerText = user.name;
           // console.log(hyperlink);
            hyperlink.href = "detail.html";
            hyperlink.dataset.id = user.id;
            //console.log(hyperlink.dataset.id);
            hyperlink.onclick = userDetail;
            const li = document.createElement("li");
            li.appendChild(hyperlink);
            ul.appendChild(li);
        }

    }

}
function userDetail(){
    SessionStorage.setItem("id", this.dataset.id);

}

function verwijderAlleChildElementenVan(element) {
    while (element.lastChild !== null) {
        element.lastChild.remove();
    }
}