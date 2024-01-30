"use strict"

const userChoices = document.querySelectorAll(".keuze[data-choose]");
for (const choice of userChoices) {
    choice.onclick = function () {
        const userSelection = this.dataset.choose;
        console.log(userSelection);
        game(userSelection);
    };
}

function game(userSelection) {
    const allSelection = ['blad', 'steen', 'schaar'];
    const computerChoice = allSelection[Math.floor(Math.random() * 3)];
    const computerImageChoice = document.querySelector("#computerKeuze img");
    computerImageChoice.src = `${computerChoice}.png`;

    const winnaar = document.getElementById("winnaar");
    if (userSelection === computerChoice) {
        winnaar.textContent = "== Gelijkspel =="
    } else if (
        userSelection === 'schaar' && computerChoice === 'blad'||
        userSelection === 'steen' && computerChoice === 'schaar'||
        userSelection === 'blad' && computerChoice === 'steen') {
        winnaar.textContent = "Je hebt GEWONNEN !!!"
    } else {
        winnaar.textContent = "De computer heeft GEWONNEN !!!"
    }

}



/*
switch (true) {
    case userSelection === computerChoice:
        winnaar.innerText = "== Gelijkspel =="
        break;
    case userSelection === 'schaar' && computerChoice === 'blad':
    case userSelection === 'steen' && computerChoice === 'schaar':
    case userSelection === 'blad' && computerChoice === 'steen':
        winnaar.innerText = "Je hebt GEWONNEN !!!"
        break;
    default: 
        winnaar.innerText = "De computer heeft GEWONNEN !!!"
        break;
}
}
*/





























