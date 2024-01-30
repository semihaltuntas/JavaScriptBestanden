"use strict";
const tbody = document.querySelector("tbody");
let datum = new Date();

for(let teller =1; teller<11; teller++){
    datum.setDate(datum.getDate()+1);
    const tr = tbody.insertRow();
    const tdDatum = tr.insertCell();
    tdDatum.innerText = datum.toLocaleString("nl-BE");
    const tdTodo = tr.insertCell();
    tdTodo.appendChild(document.createElement("input"));
    
    
}