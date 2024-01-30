"use strict"

/* for (const element of document.getElementsByTagName("button")) { 
    element.onclick = function () { 
    console.log(this.innerText); 
    };
    }
    */

/* for(const element of document.getElementsByTagName("a")) {
    element.onclick = function (){
        console.log(this.innerText);
    };
}
 */
for(const element of document.getElementsByTagName("div")) {
    element.onclick = function (){
        console.log(this.innerText);
    };
}
