"use strict";
document.getElementById("burgers").onchange = function(){
    document.getElementById("toonPrijs").disabled = false;
}
document.getElementById("toonPrijs").onclick = function () {
    const burgers = document.getElementById("burgers");
    const gekozenOption = burgers.options[burgers.selectedIndex];
    //console.log(gekozenOption);
    const prijs = gekozenOption.dataset.prijs;
    //console.log(prijs);
    document.getElementById("prijs").innerText =`${gekozenOption.text}: ${prijs}`;
    
}