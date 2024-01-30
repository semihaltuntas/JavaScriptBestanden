"use strict";

document.getElementById("toonAantalSpaties").onclick = function 
() {
    let aantalSpaties =0;
    for (const teken of document.getElementById("tekst").value)
    {
        if (teken === " ") {
         aantalSpaties++;
            
        }


    } 
    document.getElementById("aantalSpaties").innerText = aantalSpaties;
    
}
document.getElementById("tekst").oninput = function(){
    document.getElementById("toonAantalSpaties").disabled = this.value ==="";
}