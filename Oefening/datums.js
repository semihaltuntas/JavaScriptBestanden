"use strict";

const datum = new Date(1990,4,5,19,50,50); 

console.log(datum.getFullYear()); 
console.log(datum.getMonth()); 
console.log(datum.getDate()); 
console.log(datum.getDay()); 
console.log(datum.toLocaleDateString("nl-BE")); 
console.log(datum.getHours()); 
console.log(datum.getMinutes());
console.log(datum.getSeconds()); 
console.log(datum.toLocaleTimeString("nl-BE")); 
console.log(datum.toLocaleString("nl-BE"));