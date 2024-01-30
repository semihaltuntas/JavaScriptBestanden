"use strict";
const id = sessionStorage.getItem("id");

const getUser = async () => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
    );
    const user = await response.json();

    document.getElementById("name").innerText = user.name;
    document.getElementById("city").innerText = user.address.city;
};

const getTodos = async () => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos?userId=${id}`,
    );
    const todos = await response.json();

    const completedUl = document.getElementById("completed");
    const uncompletedUl = document.getElementById("uncompleted");
    for (const todo of todos) {
        if (todo.completed) {
            setTodo(todo, completedUl);
        } else {
            setTodo(todo, uncompletedUl);
        }
    }
};

const setTodo = (todo, ul) => {
    const li = document.createElement("li");
    li.innerText = todo.title;
    ul.appendChild(li);
};

getUser();
getTodos();
