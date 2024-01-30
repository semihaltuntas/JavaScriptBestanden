"use strict";
for (const hyperlink of document.querySelectorAll("a[data-teverbergenid]")) {
    hyperlink.onclick = function () { 
        const bijbehorendElement=document.getElementById(this.dataset.teverbergenid);
        if (this.innerText === "Verbergen") {
            bijbehorendElement.hidden = true;
            this.innerText ="Tonen";
            }
            else{
                bijbehorendElement.hidden = false;
                this.innerText ="Verbergen";
            } 
    };
    }
  


for (const element of document.querySelectorAll("#ingrediënten, #werkwijze")) { 
    element.onclick = function () { 
   if (this.classList.contains("opvallend")) { 
        this.classList.remove("opvallend"); 
        } else {
        this.classList.add("opvallend");
        }
    for (const eenClaas of this.classList){
        console.log(eenClaas);
    }
    };
}
    
