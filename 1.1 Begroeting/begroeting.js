

"use strict";

document.getElementById("begroeting").innerText = begroeting();




function begroeting() {
const uur = new Date().getHours();
if (uur < 12) {
return "Goede morgen.";
}
if (uur < 18) {
return "Goede middag.";
}
return "Goede avond";
}
    










// document.getElementById("begroeting").innerText = begroeting();


/* function begroeting() {
const uur = new Date().getHours();
if (uur < 12) {
return "Goede morgen.";
}
if (uur < 18) {
return "Goede middag.";
}
return "Goede avond";
} */
