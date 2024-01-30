"use strict";
let grootsteHoogte = 0;
document.getElementById("toevoegen").onclick = function () {
    if (invoerCorrect()) {
        toevoegen();
        bekers();
        nieuweInvoer();
    }
};

function invoerCorrect() {
    const verkeerdeElementen =
        document.querySelectorAll("input:invalid,select:invalid");
    for (const element of verkeerdeElementen) {
        document.getElementById(`${element.id}Fout`).hidden = false;
    }
    const correcteElementen =
        document.querySelectorAll("input:valid,select:valid");
    for (const element of correcteElementen) {
        document.getElementById(`${element.id}Fout`).hidden = true;
    }
    return verkeerdeElementen.length === 0;
}
function toevoegen() {
    const tbody = document.querySelector("tbody");
    const tr = tbody.insertRow();
    const naamTd = tr.insertCell();
    naamTd.innerText = document.getElementById("naam").value;
    const hoogteTd = tr.insertCell();
    const hoogte = Number(document.getElementById("hoogte").value);
    hoogteTd.innerText = hoogte;
    if (hoogte > grootsteHoogte) {
        grootsteHoogte = hoogte;
    }
    tr.insertCell();
}
function nieuweInvoer() {
    const naamInput = document.getElementById("naam");
    naamInput.value = "";
    document.getElementById("hoogte").value = "";
    naamInput.focus();
}
function bekers() {
    for (const tr of document.querySelector("tbody").rows) {
        const hoogte = Number(tr.cells[1].innerText);
        tr.cells[2].innerText = hoogte === grootsteHoogte ? "*" : "";
    }
}