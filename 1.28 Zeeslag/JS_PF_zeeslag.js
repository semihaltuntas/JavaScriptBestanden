"use strict";
const gegevensVanSchippen = [
    {
        naam: "vliegdekschip",
        lengte: 5,
        kleur: "groen",
        afbeelding: "boot_groen.png",
        actief: true
    },
    {
        naam: "slagschip",
        lengte: 4,
        kleur: "rood",
        afbeelding: "boot_rood.png",
        actief: true
    },
    {
        naam: "onderzeeer",
        lengte: 3,
        kleur: "geel",
        afbeelding: "boot_geel.png",
        actief: true
    },
    {
        naam: "torpedo",
        lengte: 3,
        kleur: "oranje",
        afbeelding: "boot_oranje.png",
        actief: true
    },
    {
        naam: "patrouille",
        lengte: 2,
        kleur: "blauw",
        afbeelding: "boot_blauw.png",
        actief: true
    }
]

const schippenSelect = document.getElementById("schepen");
const getalenSelect = document.getElementById("rij");
const lettersSelect = document.getElementById("kolom");
const horizontaalSelect = document.getElementById("horizontaal");
const verticaalSelect = document.getElementById("verticaal");
const foutBericht = document.getElementById("msg");

setRowAndColumnData();

const existedShips = loadExistingValues();
if (existedShips) {
    for (const item of existedShips) {
        placementOfShip(item.schip, item.row, item.column, item.type)
    }
}

document.getElementById("plaatsschip").onclick = () => controleerSelecties();
document.getElementById("nieuwspel").onclick = () => {
    localStorage.clear();
    location.reload();
};

function setRowAndColumnData() {
    // Setting the row and column data
    const defaultOption = document.createElement("option");
    defaultOption.value = "---kies een schip---";
    defaultOption.text = "---kies een schip---";
    schippenSelect.appendChild(defaultOption);

    for (const schip of gegevensVanSchippen) {
        const option = document.createElement("option");
        option.value = schip.naam;
        option.text = `${schip.lengte}* ${schip.naam} `;
        schippenSelect.appendChild(option);
    }

    for (let i = 1; i <= 10; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.text = i;
        getalenSelect.appendChild(option);
    }

    for (let i = 65; i < 75; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.text = String.fromCharCode(i);
        lettersSelect.appendChild(option);
    }
}

function controleerSelecties() {
    //showing error or setting the ships
    if (schippenSelect.value === "---kies een schip---") {
        foutBericht.innerText = "Er moet een schip geselecteerd zijn" 
    } else {
        foutBericht.innerText = ""
        placeShips();

    }
}

function placeShips() {
    let schip = {};
    for (const schipDict of gegevensVanSchippen) { //Collecting the ships from dataArray
        if (schippenSelect.value === schipDict.naam) {
            schip = schipDict;
            break;
        }
    }

    let column = lettersSelect.value - 'A'.charCodeAt(0);
    let row = getalenSelect.value - 1;

    // Checking if we can place the ship
    const result = checkIfValid(row, column, schip);
    if (result !== false) {
        const type = horizontaalSelect.checked ? 'H' : 'V';
        placementOfShip(schip, row, column, type) // place the ship on the board
        saveToLocaleStorage(schip, row, column, type) // save the ship to the localStorage
    }
}
function showErrorMEssage(message) {
    foutBericht.innerText = message;
}

function checkIfValid(row, column, schip) { 
    // validating the selection is proper or showing errors
    if (horizontaalSelect.checked) {
        if (schip.lengte + column > 10) {
            showErrorMEssage("Er is horizontaal niet voldoende ruimte. ");
            return false;
        }

    } if (verticaalSelect.checked) {
        if (schip.lengte + row > 10) {
            showErrorMEssage("Er is verticaal niet voldoende ruimte.");
            return false;
        }
    }
    for (let i = 0; i < schip.lengte; i++) {
        // Getting the div from id
        const idVanDiv = row.toString() + column.toString();
        const div = document.getElementById(idVanDiv);
        // If there is a ship on that div, return false and show error
        if (div.dataset.schip) {
            showErrorMEssage("Er is al een schip ");
            return false;
        }

        if (horizontaalSelect.checked) {
            column += 1;
        } else {
            row += 1;
        }
    }
    return true;
}

function placementOfShip(schip, row, column, type) {
    for (let i = 0; i < schip.lengte; i++) {
        // Getting the div from id
        const idVanDiv = row.toString() + column.toString();
        const div = document.getElementById(idVanDiv);

        // Select and add image
        const imgElement = document.createElement("img");
        imgElement.src = `./img/${schip.afbeelding}`;
        imgElement.alt = schip.afbeelding;

        div.appendChild(imgElement);
        div.dataset.schip = true;

        if (type.toUpperCase() === 'H') {
            column += 1;
        } else {
            row += 1;
        }
    }
    // After placing, remove the option
    schippenSelect.querySelector(`option[value="${schip.naam}"]`).remove();
}

function saveToLocaleStorage(schip, row, column, type) {
    // check values in localestroga and if there is valid data add and update with the new one.

    const schippen = loadExistingValues() ? loadExistingValues() : [];

    schippen.push({ schip: schip, row: row, column: column, type: type })
    localStorage.setItem('schippen', JSON.stringify(schippen));
}

function loadExistingValues() {
    //gets the values from the locale storage
    return JSON.parse(localStorage.getItem("schippen"));
}






