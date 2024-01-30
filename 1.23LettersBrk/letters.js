"use strict";

const toonResultaat = (users) => {
    const resultaatUl = document.getElementById("resultaat");
    users.map((user) => {
        const li = document.createElement("li");
        resultaatUl.appendChild(li);

        const aLink = document.createElement("a");
        aLink.textContent = user.name;
        aLink.href = "details.html";
        aLink.onclick = () => sessionStorage.setItem("id", user.id)
        li.appendChild(aLink);
    });
};

const getUserData = async (currentLetter) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const userData = await response.json();
    const eliminatedData = userData.filter((user) =>
        user.name.toLowerCase().includes(currentLetter),
    );
    toonResultaat(eliminatedData);
};

document.getElementById("zoeken").onclick = function () {
    const resultaatUl = document.getElementById("resultaat");
    resultaatUl.innerHTML = "";
    const currentLetter = document
        .getElementById("letters")
        .value.toLowerCase()
        .trim();

    if (currentLetter !== "") {
        getUserData(currentLetter);
    } else {
        alert("Je moet minimaal een letter typen.");
    }
};
