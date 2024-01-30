deurenMaken();
const hyperlinks = document.querySelectorAll("#deuren a");
const hyperlinkMetFriet = hyperlinks[Math.floor(Math.random() * hyperlinks.length)];
 console.log(hyperlinkMetFriet);
let beurten = 0;
for (const hyperlink of hyperlinks) {
    hyperlink.onclick = function () {
        beurten++;
        const img = this.querySelector("img");
        if (hyperlink === hyperlinkMetFriet) {
            img.src = "gevonden.png";
            img.alt = "gevonden";
            document.getElementById("beurten").innerText = beurten;
            document.getElementById("resultaat").hidden = false;
        } else {
            img.src = "deuropen.png";
            img.alt = "deur open";
        }

    };

}


function deurenMaken() {
    const body = document.getElementById("deuren");
    for (let i = 1; i <= 7; i++) {
        const img = document.createElement("img");
        img.src = "deurtoe.png";
        img.alt = "deur toe";
        const hyperlink = document.createElement("a");
        hyperlink.href = "#";
        hyperlink.appendChild(img);
        body.appendChild(hyperlink);

    }

}