"use strict";
const aantalHamburgers = document.getElementById("hamburgers").length;
document.getElementById("aantalHamburgers").innerText = aantalHamburgers;

const aantalFrieten = document.getElementsByName("friet").length;
document.getElementById("aantalFrieten").innerText = aantalFrieten;

const aantalDesserts = document.getElementsByName("dessert").length;
document.getElementById("aantalDesserts").innerText = aantalDesserts;

document.getElementById("hamburgers").onchange = function () {
    const gekozenNummer = this.value;
    const gezokenNaam = this.options[this.selectedIndex].innerText;
    document.getElementById("keuzeBurger").innerText =
    `${gekozenNummer}:${gezokenNaam}`;
}
const frieten = document.getElementsByName("friet");
for (const inputFriet of frieten) {
    inputFriet.onchange = function () {
        const gekozenNummer =this.value;
        const gekozenNaam = this.parentElement.innerText;
        document.getElementById("keuzeFriet").innerText = 
        `${gekozenNummer}:${gekozenNaam}`;
    }
}

const desserts = document.getElementsByName("dessert");
for (const inputDessert of desserts) {
    inputDessert.onchange = function () {
        let keuzes = "";
        for (const eenInputDessert of desserts) {
            if (eenInputDessert.checked) {
                keuzes += `${eenInputDessert.value}:${eenInputDessert.parentElement.innerText},`
            }
        }
        document.getElementById("keuzeDessert").innerText = keuzes.slice(0,-1);
    };

}