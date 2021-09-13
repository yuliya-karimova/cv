const body = document.body;
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');

function showMenu() {
    nav.classList.toggle('invisible');
};

menu.addEventListener('click', showMenu);