"use strict";
const mandjeUl = document.getElementById("mandje");
const aantalSpan = document.getElementById("aantal");
let mandje = JSON.parse(localStorage.getItem("mandje"));

if (mandje === null) {
    mandje = [];
} else {
    for (const burger of mandje) {
        const li = document.createElement("li");
        li.innerText = burger;
        mandjeUl.appendChild(li);
    }
    aantalSpan.innerText = mandje.length;
  }
 

    for (const hyperlink of document.querySelectorAll("#beschikbaar a")) {
        hyperlink.onclick = function () {
            const burger = this.innerText;
            mandje.push(burger);
            localStorage.setItem("mandje", JSON.stringify(mandje));
            const li = document.createElement("li");
            li.innerText = burger;
            mandjeUl.appendChild(li);
            aantalSpan.innerText = Number(aantalSpan.innerText) + 1;
            

        }
    }


