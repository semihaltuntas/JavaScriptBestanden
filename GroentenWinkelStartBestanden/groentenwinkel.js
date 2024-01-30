"use strict";
const aantal = document.getElementById("aantal");
const groenteKies = document.getElementById("groente");

leesGroenten();
document.getElementById("toevoegen").onclick = () => addAndShowSelections();

async function leesGroenten() {
    const response = await fetch("groenten.json");
    if (response.ok) {
        const groenten = await response.json();
        //console.log(groenten);
        for (const groente of groenten) {
            const groenten = document.getElementById("groente");

            const option = document.createElement("option");
            option.label = `${groente.naam} (${groente.prijs}/${groente.eenheid})`;
            //console.log(option);
            option.prijs = Number(groente.prijs);
            option.naam = groente.naam;
            option.eenheid = groente.eenheid;
            groenten.appendChild(option);
        }
    }
}

function addAndShowSelections() {
    const result = getErrorMessage(groenteKies.value, aantal.value);

    if (result) {
        document.getElementById("foutmelding").innerText = result;
    } else {
        document.getElementById("foutmelding").innerText = "";
        const groenteName = groenteKies.options[groenteKies.selectedIndex].naam;
        // console.log(groenteName);
        const groentePrijs =
            groenteKies.options[groenteKies.selectedIndex].prijs;
        // console.log(groentePrijs);

        const tbody = document.querySelector("tbody");

        const existValue = dataVantable(groenteName, aantal.value);

        if (!existValue) {
            const tr = tbody.insertRow();

            const geselecteerdeGroentenCell = tr.insertCell();
            geselecteerdeGroentenCell.innerText = groenteName;

            const geselecteerdeAantalCell = tr.insertCell();
            geselecteerdeAantalCell.innerText = aantal.value;

            const geselecteerdePrijsCell = tr.insertCell();
            geselecteerdePrijsCell.innerText = groentePrijs;

            const geselecteerdeBerekeningCell = tr.insertCell();
            geselecteerdeBerekeningCell.innerText = berekeningPrijs(groentePrijs,aantal.value);

            const fotoCell = tr.insertCell();
            const deleteButton = document.createElement("img");
            deleteButton.src = "vuilbak.png";
            fotoCell.appendChild(deleteButton);
            deleteButton.onclick = function () {
                tbody.removeChild(tr);
                subTotaal();
            };
            subTotaal();
        } else {
            subTotaal();
        }
    }
}

function berekeningPrijs(prijs, aantal) {
    return Number(prijs * aantal).toFixed(2);
}

function subTotaal() {
    const tbody = document.querySelector("tbody");
    let totaal = 0;
    for (let i = 0; i < tbody.rows.length; i++) {
        const betalenCell = tbody.rows[i].cells[3];
        console.log(betalenCell);
        totaal += Number(betalenCell.innerText);
    }
    const totaalCell = document.getElementById("totaal");
    totaalCell.innerText = totaal.toFixed(2);
}

function dataVantable(groetenNaam, aantal) {
    //check groenten namen, en berekent het totaal opnieuw
    const tableData = document.getElementById("myTable");
    for (let i = 1; i < tableData.rows.length - 1; i++) {
        const naamVanCell = tableData.rows[i].cells[0].innerText;

        if (naamVanCell === groetenNaam) {
            const oudAantal = Number(tableData.rows[i].cells[1].innerText);
            const nieuwAantal = Number(aantal) + oudAantal;
            const subOudTotaal = Number(tableData.rows[i].cells[3].innerText);
            const itemPrijs = subOudTotaal / oudAantal;
            const nieuwSubTotaal = itemPrijs * nieuwAantal;

            tableData.rows[i].cells[1].innerText = nieuwAantal;
            tableData.rows[i].cells[3].innerText = nieuwSubTotaal;

            return true;
        }
    }
    return false;
}

function getErrorMessage(groente, aantal) {
    let message = "";
    if (groente === "--- maak uw keuze ---") {
        message = "Je moet een groente kiezen";
    } else if (aantal < 1) {
        message = "Tik een aantal groter dan 1";
    }
    return message;
}