
"use strict"
const voornamenLijst = [];

document.getElementById("toevoegen").onclick = function () {
    const voornaamInput = document.getElementById("voornaam");
    const valueVoornaam = voornaamInput.value;

    checkAndPushVoornaam(valueVoornaam);
    updateVoornamenLijst();

    voornaamInput.value = "";
    voornaamInput.focus();
}

function checkAndPushVoornaam(valueVoornaam) {
    if (valueVoornaam !== "") {
        let gevonden = false;
        for (const objectVoornaam of voornamenLijst) {
            if (objectVoornaam.name === valueVoornaam) {
                objectVoornaam.count += 1;
                gevonden = true;
                break;
            }
        }
        if (!gevonden) {
            voornamenLijst.push({ name: valueVoornaam, count: 1 });
        }
    }
}

function updateVoornamenLijst() {
    const voornamenElement = document.getElementById("voornamen");
    voornamenElement.innerHTML = '';

    for (const objectVoornaam of voornamenLijst) {
        const listItem = document.createElement("li");
        listItem.textContent = `${objectVoornaam.name}: ${objectVoornaam.count}`;
        voornamenElement.appendChild(listItem);
    }
}


