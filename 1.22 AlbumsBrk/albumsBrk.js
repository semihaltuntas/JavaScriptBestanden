"use strict";

const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const userData = await response.json();

    showUsers(userData);
};

const showUsers = (users) => {
    const userListUl = document.getElementById("userList");
    users.map((user) => {
        const li = document.createElement("li");
        userListUl.appendChild(li);

        const aLink = document.createElement("a");
        aLink.textContent = user.name;
        aLink.href = "#";
        aLink.onclick = () => getAlbumData(user.id, user.name);
        li.appendChild(aLink);
    });
};

const getAlbumData = async (id, name) => {
    document.getElementById("albumOwner").innerText = `Album van ${name}`;
    document.getElementById("albumList").innerHTML = "";

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums?userId=${id}`,
    );
    const albumData = await response.json();

    showAlbums(albumData);
};
const showAlbums = (albums) => {
    const albumListUl = document.getElementById("albumList");
    albums.map((album) => {
        const li = document.createElement("li");
        li.innerText = album.title;
        albumListUl.appendChild(li);
    });
};


getUsers();
