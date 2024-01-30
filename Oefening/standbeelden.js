"use strict";
function toonStandbeeld() {
    const img = document.getElementById("afbeelding");
    img.title = this.dataset.plaats; 
    img.src = `${this.dataset.foto}.jpg`;
};
/* "UNDİNAMİC CODE"
  document.getElementById("vrijheidsbeeld").onclick = toonStandbeeld;
  document.getElementById("moederland").onclick = toonStandbeeld;
  document.getElementById("mannekepis").onclick = toonStandbeeld;
*/

//-----------------------------------------------//

/* Eerste Veranderd code
const hyperLinks = document.getElementsByTagName("a");
for (const hyperlink of hyperLinks) {

    hyperlink.onclick = toonStandbeeld;

} */

/* Tweede veranderd code
const standbeeldenUl = document.getElementById("standbeelden");
for(const hyperlink of standbeeldenUl.getElementsByTagName("a")){
    
    hyperlink.onclick = toonStandbeeld;
};
*/
const hyperLinks = document.querySelectorAll("#standbeelden a");
for(const hyperlink of hyperLinks){
    hyperlink.onclick = toonStandbeeld;
};


document.getElementById("isHetWeekend").onclick = function () {
    const dagInWeek = new Date().getDay();
    document.getElementById("weekend").innerText =
        dagInWeek === 6 || dagInWeek === 0 ?
            "Ja" : "Nee";
};
// ------------VOORBEELDEN---------------

// Parent child ilişkisi - parent id sini gösterme
const eersteLi = document.querySelector("li");
console.log(eersteLi.parentElement.id);

console.log("-----------");


// coklu childi olan elementler ıcın

const standbeeldenLijst = document.getElementById("standbeelden");
for (const childElement of standbeeldenLijst.children){
    console.log(standbeeldenLijst);
}

console.log("-----------");

// tek child i olan elementler icin

const eersteLi1 = document.querySelector("li");
for (const childElement of eersteLi1.children){
    console.log(childElement);
}
console.log("-----------");

//Siblings Kardes elementleri bulma yöntemi

const eersteLi2 = document.querySelector("li");
for(const sibling of eersteLi2.parentElement.children)
{ if(sibling !== eersteLi2){
    console.log(sibling);
}
}
console.log("-----------");

// nextElementSibling 2. ögenin sonraki kardeslerini  bulma

const tweedeLi = document.querySelector("li:nth-child(2)");
let volgendeSibling = tweedeLi.nextElementSibling;
while (volgendeSibling !== null) {
    console.log(volgendeSibling);
    volgendeSibling = volgendeSibling.nextElementSibling;
}

// previousElementSibling  2. ögenin önceki kardesını  bulma

const voorlaatsteLi = document.querySelector("li:nth-last-child(2)");
let vorigeSibling = voorlaatsteLi.previousElementSibling;
while (vorigeSibling !== null) {
    console.log(vorigeSibling);
    vorigeSibling = vorigeSibling.previousElementSibling;
}
