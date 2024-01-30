"use strict";
for (const li of document.getElementsByTagName("li")) {
li.onclick = function () {
this.classList.add("opvallend");
maakSiblingsOnopvallendVan(this);
}
}
function maakSiblingsOnopvallendVan(li) {
for (const sibling of li.parentElement.children) {
if (sibling !== li) {
sibling.classList.remove("opvallend");
}
}
}