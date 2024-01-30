"use strict";

leesUsers();
async function leesUsers() {
    const response = await fetch("geslachten.json");
    if (response.ok) {
        const users = await response.json();
        //console.log(users);
        document.getElementById("nietGevonden").hidden = true;
        document.getElementById("mannen").onclick = () => gegevensVanMannen(users);
        document.getElementById("vrouwen").onclick = () => gegevensVanVrouwen(users);
        document.getElementById("alle").onclick = () => gegevensVanAlle(users);
    } else {
        document.getElementById("nietGevonden").hidden = false;
    }

}

function gegevensVanMannen(users) {
    const tbody = document.getElementById("personenData");
    //console.log(tbody);
    tbody.innerHTML = "";
    for (const user of users) {
        if (user.geslacht === "man") {
            const tr = tbody.insertRow();

            const voornaamCell = tr.insertCell(0);
            voornaamCell.innerText = user.voornaam;

            const familienaamCell = tr.insertCell(1);
            familienaamCell.innerText = user.familienaam;

            const geslachtCell = tr.insertCell(2);
            if (user.geslacht === "man") {
                geslachtCell.innerHTML = "<img src='man.png' alt='man'>";
            };

            const fotoCell = tr.insertCell(3);
            if (user.foto) {
                const foto = document.createElement("img");
                foto.src = user.foto;
                foto.alt = "foto";
                fotoCell.appendChild(foto);
            }
        }
    };
}

function gegevensVanVrouwen(users) {
    const tbody = document.getElementById("personenData");
    tbody.innerHTML = "";
    for (const user of users) {
        if (user.geslacht === "vrouw") {
            const tr = tbody.insertRow();

            const voornaamCell = tr.insertCell(0);
            voornaamCell.innerText = user.voornaam;

            const familienaamCell = tr.insertCell(1);
            familienaamCell.innerText = user.familienaam;

            const geslachtCell = tr.insertCell(2);
            if (user.geslacht === "vrouw") {
                geslachtCell.innerHTML = "<img src='vrouw.png' alt='vrouw'>";
            };

            const fotoCell = tr.insertCell(3);
            if (user.foto) {
                const foto = document.createElement("img");
                foto.src = user.foto;
                foto.alt = "foto";
                fotoCell.appendChild(foto);
            }
        }
    }
}

function gegevensVanAlle(users) {
    const tbody = document.getElementById("personenData");
    tbody.innerHTML = "";
    for (const user of users) {
        if (user.geslacht === "man" || user.geslacht === "vrouw") {
            const tr = tbody.insertRow();

            const voornaamCell = tr.insertCell(0);
            voornaamCell.innerText = user.voornaam;

            const familienaamCell = tr.insertCell(1);
            familienaamCell.innerText = user.familienaam;

            const geslachtCell = tr.insertCell(2);
            if (user.geslacht === "man") {
                geslachtCell.innerHTML = "<img src='man.png' alt='man'>";
            } else if (user.geslacht === "vrouw") {
                geslachtCell.innerHTML = "<img src='vrouw.png' alt='vrouw'>";
            } else {
                geslachtCell.innerHTML = "<img src='leeg.png' alt='leeg'>";
            }

            const fotoCell = tr.insertCell(3);
            if (user.foto) {
                const foto = document.createElement("img");
                foto.src = user.foto;
                foto.alt = "foto";
                fotoCell.appendChild(foto);
            }
       }
    }
}