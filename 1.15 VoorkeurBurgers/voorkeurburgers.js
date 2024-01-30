"use strict";
const linksBurgers = document.getElementById("links");
const rechtsBurgers = document.getElementById("rechts");

const eenNaarRechtsButton = document.getElementById("eenNaarRechts");
const allesNaarRechtsButton = document.getElementById("allesNaarRechts");
const eenNaarLinksButton = document.getElementById("eenNaarLinks");
const allesNaarLinksButton = document.getElementById("allesNaarLinks");

linksBurgers.onchange = function () {
    eenNaarRechtsButton.disabled = false;
};

rechtsBurgers.onchange = function () {
    eenNaarLinksButton.disabled = false;
};

allesNaarRechtsButton.onclick = function () {
    for (const linksBurgerElement of linksBurgers) {
        const optionElement = document.createElement("option");
        optionElement.innerText = linksBurgerElement.innerText;
        rechtsBurgers.add(optionElement);
    }
    linksBurgers.options.length = 0;
    allesNaarRechtsButton.disabled = true;
    allesNaarLinksButton.disabled = false;
    eenNaarRechtsButton.disabled = true;
};

allesNaarLinksButton.onclick = function () {
    for (const rechtsBurgerElement of rechtsBurgers) {
        const optionElement = document.createElement("option");
        optionElement.innerText = rechtsBurgerElement.innerText;
        linksBurgers.add(optionElement);
    }
    rechtsBurgers.options.length = 0;
    allesNaarRechtsButton.disabled = false;
    allesNaarLinksButton.disabled = true;
    eenNaarLinksButton.disabled = true;
};


eenNaarRechtsButton.onclick = function () {
    rechtsBurgers.add(linksBurgers.options[linksBurgers.selectedIndex])
    if (linksBurgers.options.length === 0) {
        eenNaarRechtsButton.disabled = true;
        allesNaarRechtsButton.disabled = true;
    }
    allesNaarLinksButton.disabled = false;

}

eenNaarLinksButton.onclick = function () {
    linksBurgers.add(rechtsBurgers.options[rechtsBurgers.selectedIndex])
    if (rechtsBurgers.options.length === 0) {
        eenNaarLinksButton.disabled = true;
    }
    allesNaarRechtsButton.disabled = false;
}
