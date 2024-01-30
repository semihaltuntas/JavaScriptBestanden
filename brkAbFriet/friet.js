"use strict";

const frietDivElement = document.querySelectorAll("#friet li");
const rndInt = Math.floor(Math.random() * 7);
// console.log(rndInt);

frietDivElement[rndInt].dataset.gevonden = true;
let totalTries = 1;

for (const element of frietDivElement) {
    element.onclick = function () {
        if (this.dataset.gevonden) {
            console.log(this.childNodes);
            this.childNodes[0].src = "gevonden.png";
            this.childNodes[0].alt = "gevonden";
            document.getElementById("resultaat").innerText = `U had ${totalTries} beurt(en) nodig`
        } else {
            this.childNodes[0].src = "deuropen.png";
            this.childNodes[0].alt = "dooropen";
            totalTries++;
        }
    };
}
