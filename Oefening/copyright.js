"use strict";
/* Html ile baglantı kurma*/

const vdabHyperlink = document.getElementById("vdab");

console.log(vdabHyperlink);
console.log(vdabHyperlink.href);
console.log(vdabHyperlink.innerText);

const jaarSpan= document.getElementById("jaar");
jaarSpan.innerText = new Date().getFullYear();
console.log(jaarSpan);