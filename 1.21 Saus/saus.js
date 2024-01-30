"use strict";
let saus;
let puntjes;
let foutePogingen = 0;
leesSauzen();
async function leesSauzen() {
    const response = await fetch("sauzen.json");
    if (response.ok) {
        const sauzen = await response.json();
        console.log(sauzen);
        saus = sauzen[Math.floor((Math.random() * sauzen.length))];
        console.log(saus);
        puntjes = ".".repeat(saus.length);
        document.getElementById("puntjes").innerText = puntjes;
        document.querySelector("body").hidden = false;
    } else {
        document.getElementById("nietGevonden").hidden = false;
    }
}

document.getElementById("raden").onclick = function () {
    const letterInput = document.getElementById("letter");
    if (letterInput.value === "") {
        letterInput.focus();
    }
    else {
        gok(letterInput.value);
        document.getElementById("puntjes").innerText = puntjes;
        document.getElementById("foutePogingen").src = `${foutePogingen}.png`;
        console.log(`${foutePogingen}.png`); 
        if (!puntjes.includes(".")) {
            document.getElementById("gewonnenSaus").innerText = saus;
            document.getElementById("gewonnen").hidden = false;
        } else {
            if (foutePogingen === 10) {
                document.getElementById("verlorenSaus").innerText = saus;
                document.getElementById("verloren").hidden = false;
            } else {
                letterInput.value = "";
                letterInput.focus();
            }
        }
    }
};
function gok(letter) {
    if (!saus.includes(letter)) {
        foutePogingen++;
    }
    
    puntjes = "";
    for (let teller = 0; teller != saus.length; teller++) {
        puntjes =puntjes + letter === saus[teller] ? letter : ".";
    }
}
