"use strict";
document.getElementById("delen").onclick = function () {
    
    const verkeerdeElementen = document.querySelectorAll("input:invalid");
    for (const element of verkeerdeElementen) {
        document.getElementById(`${element.id}Fout`).hidden = false;
        console.log(element);
    }
    const correcteElementen = document.querySelectorAll("input:valid");
    for (const element of correcteElementen) {
        document.getElementById(`${element.id}Fout`).hidden = true;
    }

    const verdeeldSpan = document.getElementById("verdeeld");
    if (verkeerdeElementen.length === 0) {
        verdeeldSpan.hidden = false;
        verdeeldSpan.innerText = document.getElementById("getal1").value /
            document.getElementById("getal2").value;
    } else {
        verdeeldSpan.hidden = true;
    }



}