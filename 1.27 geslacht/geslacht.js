"use strict";
leesUsers();

async function leesUsers() {
    const response = await fetch("geslachten.json");
    if (response.ok) {
        const users = await response.json();
        // console.log(users);
        document.getElementById("nietGevonden").hidden = true;
        document.getElementById("mannen").onclick = () => gegevensVanAlle(users.filter(user => user.geslacht === "man"));
        document.getElementById("vrouwen").onclick = () => gegevensVanAlle(users.filter(user => user.geslacht === "vrouw"));
        document.getElementById("allen").onclick = () => gegevensVanAlle(users);
    } else {
        document.getElementById("nietGevonden").hidden = true;
    }
}

function gegevensVanAlle(users) {
    const tbody = document.getElementById("gegevensPersonen");
    tbody.innerHTML = "";
    for (const user of users) {
        if (true) {
            const tr = tbody.insertRow();

            const voornaamCell = tr.insertCell();
            voornaamCell.innerText = user.voornaam;

            const familienaamCell = tr.insertCell();
            familienaamCell.innerText = user.familienaam;

            const geslachtCell = tr.insertCell();
            const elementImg = document.createElement("img");
            elementImg.src = `${user.geslacht}.png`;
            elementImg.alt = `${user.geslacht}`
            geslachtCell.appendChild(elementImg);

            const fotoCell = tr.insertCell();
            if (user.foto) {
                const image = document.createElement("img");
                image.src = user.foto;
                fotoCell.appendChild(image);
            }
        }

    }
}


