"use strict";

document.getElementById("toevoegen").onclick = function(){
    const tbody = document.querySelector("tbody");
    const tr = tbody.insertRow();
    const voornaamId = tr.insertCell();
    const voornaamInput = document.getElementById("voornaam");
    voornaamId.innerText = voornaamInput.value;
    const familienaamId = tr.insertCell();
    const familienaamInput = document.getElementById("familienaam");
    familienaamId.innerText = familienaamInput.value;

    const verwijderTd = tr.insertCell();
    const verwijdHyperlink = document.createElement("a");
    verwijdHyperlink.innerText = "X";
    verwijdHyperlink.href ="#";
    verwijderTd.appendChild(verwijdHyperlink);
    verwijdHyperlink.onclick = function (){
      const tr = this.parentElement.parentElement;
      tr.remove();
    } ;

    voornaamInput.value = "";
    familienaamInput.value = "";
    voornaamInput.focus();

}