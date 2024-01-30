"use strict";
const shipData = [
    {
        naam: "vliegdekschip",
        lengte: 5,
        kleur: "groen",
        afbeelding: "boot_groen.png",
        actief: true,
    },
    {
        naam: "slagschip",
        lengte: 4,
        kleur: "rood",
        afbeelding: "boot_rood.png",
        actief: true,
    },
    {
        naam: "onderzeeer",
        lengte: 3,
        kleur: "geel",
        afbeelding: "boot_geel.png",
        actief: true,
    },
    {
        naam: "torpedo",
        lengte: 3,
        kleur: "oranje",
        afbeelding: "boot_oranje.png",
        actief: true,
    },
    {
        naam: "patrouille",
        lengte: 2,
        kleur: "blauw",
        afbeelding: "boot_blauw.png",
        actief: true,
    },
];

let removedShipName = [];

const selectShipElement = document.getElementById("schepen");
const selectedRowElement = document.getElementById("rij");
const selectedColumnElement = document.getElementById("kolom");
const selectedDirectionElement = document.getElementsByName('richting');
const msgElement = document.getElementById("msg");

const localStorageShipData = JSON.parse(localStorage.getItem('ships'));
let shipArrayForLocalStorage = localStorageShipData ? localStorageShipData : [];

/* setting dropdown options for selecting ships */
const setShipDropdownData = (data) => {
    for (let i = 0; i < data.length + 1; i++) {
        const optionElement = document.createElement("option");
        if (i === 0) {
            optionElement.value = "kies";
            optionElement.text = "--- kies een schip ---";
        } else {
            optionElement.value = data[i - 1].naam;
            optionElement.text = `${data[i - 1].lengte}* ${data[i - 1].naam
                }`;
        }
        selectShipElement.appendChild(optionElement);
    }
};
/* setting dropdown options for row and column */
const setRowAndColumnDropdownData = () => {
    const selectRowElement = document.getElementById("rij");
    const selectColumnElement = document.getElementById("kolom");

    for (let i = 1; i <= 10; i++) {
        const optionRowElement = document.createElement("option");
        const optionColumnElement = document.createElement("option");

        optionRowElement.value = i;
        optionRowElement.text = i;
        optionColumnElement.value = String.fromCharCode(i + 64);
        optionColumnElement.text = String.fromCharCode(i + 64);

        selectRowElement.appendChild(optionRowElement);
        selectColumnElement.appendChild(optionColumnElement);
    }
};
/* drawing ships */
const setShip = () => {
    const ship = selectShipElement.value;
    const row = selectedRowElement.value;
    const column = selectedColumnElement.value;
    let direction;

    for (let i = 0; i < selectedDirectionElement.length; i++) {
        if (selectedDirectionElement[i].checked)
            direction = selectedDirectionElement[i].value;
    }

    if (ship === "kies") {
        msgElement.innerText = "[ Kiezen een schip ]";
    } else {
        msgElement.innerText = "";
        const selectedShip = shipData.find((item) => item.naam === ship);
        const startIndex = (row - 1) * 10 + (column.charCodeAt(0) - 64) - 1;
        const indexArray = [];
        const indexForIdSelection =
            startIndex < 10 ? `0${startIndex}` : startIndex;

        if (direction === "horizontaal") {
            for (let i = 0; i < selectedShip.lengte; i++) {
                if (indexForIdSelection < 10) {
                    if (Number(indexForIdSelection) + i < 10) {
                        indexArray.push(`0${Number(indexForIdSelection) + i}`);
                    } else {
                        indexArray.push(`${Number(indexForIdSelection) + i}`);
                    }
                } else {
                    indexArray.push(`${indexForIdSelection + i}`);
                }
            }
        } else {
            for (let i = 0; i < selectedShip.lengte; i++) {
                if (indexForIdSelection < 10) {
                    if (i === 0) {
                        indexArray.push(
                            `0${Number(indexForIdSelection) + i * 10}`,
                        );
                    } else {
                        indexArray.push(
                            `${Number(indexForIdSelection) + i * 10}`,
                        );
                    }
                } else {
                    indexArray.push(`${indexForIdSelection + i * 10}`);
                }
            }
        }
        const place = checkAvailableSpace(indexArray, row, direction);
        let otherShip;
        if (place === "available") {
            otherShip = checkOtherShips(indexArray);
        }

        if (place !== "available") {
            msgElement.innerText = "[ Onvoldoende ruimte" + ` ${place} ]`;
        } else {
            if (!otherShip) {
                msgElement.innerText = "[ Er zijn andere schepen ]";
            }
        }
        if (place === "available" && otherShip) {
            msgElement.innerText = "";
            removedShipName.push(ship);

            const shipDataForLocalStorage = {
                removedShipName,
                indexArray,
                ship: selectedShip
            }
            shipArrayForLocalStorage.push(shipDataForLocalStorage);
            for (let i = 0; i < indexArray.length; i++) {
                const element = indexArray[i];
                const selectedDiv = document.getElementById(element);

                const imageElement = document.createElement("img");
                imageElement.alt = selectedShip.kleur;
                imageElement.src = `./img/${selectedShip.afbeelding}`;
                selectedDiv.appendChild(imageElement);
            }
        }
        localStorage.setItem("ships", JSON.stringify(shipArrayForLocalStorage));
        selectShipElement.innerHTML = "";
        setShipDropdownData(eliminateRemovedShipFromShipData(removedShipName))
    }
};
/* Validate if the place you want to set a new ship in the table is suitable. */
const checkAvailableSpace = (indexArray, row, direction) => {
    console.log(indexArray, row, direction)
    let result = "available";
    if (direction === "horizontaal") {
        const outOfRangeArray = indexArray.filter(
            (item) => Number(item) >= row * 10,
        );
        result = outOfRangeArray.length > 0 ? "horizontaal" : result;
    } else {
        const outOfRangeArray = indexArray.filter(
            (item) => Number(item) >= 100,
        );
        result = outOfRangeArray.length > 0 ? "verticaal" : result;
    }

    return result;
};

/* Validate whether there are any other ships in the table where you want to set a new ship. */
const checkOtherShips = (indexArray) => {
    for (let i = 0; i < indexArray.length; i++) {
        const element = indexArray[i];
        const divElement = document.getElementById(element);
        if (divElement.innerHTML !== "") {
            return false;
        }
    }
    return true;
};
/* delete ship object from shipData for dropdown*/
const eliminateRemovedShipFromShipData = (removedShipName) => {
    let eliminatedShipData = [];
    for (let i = 0; i < removedShipName.length; i++) {
        const element = removedShipName[i];
        eliminatedShipData = eliminatedShipData.length === 0 ? shipData.filter((item) => item.naam !== element) :
            eliminatedShipData.filter((item) => item.naam !== element)

    }
    return eliminatedShipData
}
/* clear the table */
const clearTableAndSetDefault = () => {
    selectShipElement.innerHTML = "";
    setShipDropdownData(shipData);
    msgElement.innerText = "";
    shipArrayForLocalStorage = [];
    removedShipName = [];

    for (let i = 0; i < 100; i++) {
        const divElement = document.getElementById(i < 10 ? `0${i}` : `${i}`);
        divElement.innerHTML = "";
    }
    localStorage.clear();
}

/* setting localStorage ships to table */
if (localStorageShipData) {
    selectShipElement.innerHTML = "";
    msgElement.innerText = "";
    removedShipName = localStorageShipData[0].removedShipName;
    setShipDropdownData(eliminateRemovedShipFromShipData(localStorageShipData[localStorageShipData.length - 1].removedShipName));

    for (let index = 0; index < localStorageShipData.length; index++) {
        const element = localStorageShipData[index];
        for (let i = 0; i < element.indexArray.length; i++) {
            const item = element.indexArray[i];
            const selectedDiv = document.getElementById(item);

            const imageElement = document.createElement("img");
            imageElement.alt = element.ship.kleur;
            imageElement.src = `./img/${element.ship.afbeelding}`;
            selectedDiv.appendChild(imageElement);
        }
    }
} else {
    setShipDropdownData(shipData);
}

setRowAndColumnDropdownData();

document.getElementById("plaatsschip").onclick = () => setShip();
document.getElementById("nieuwspel").onclick = () => clearTableAndSetDefault();
