"use strict";

document.getElementById("tekst").oninput = function
    () {
       
    let aantalKlinkers = 0;
    const tekst = this.value.toLowerCase();

    for (const teken of tekst){
        if ("aeiou".includes(teken)) {
            aantalKlinkers++;

        }
    }
    document.getElementById("aantalKlinkers").innerText = aantalKlinkers;
};