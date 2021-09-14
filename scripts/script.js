// document.cookie = 'SameSite=None; Secure';

const body = document.body;
const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu-list');

function showMenu() {
    menuList.classList.toggle('active');
    if (menuList.style.maxHeight) {
        menuList.style.maxHeight = null;
    } else {
        menuList.style.maxHeight = menuList.scrollHeight + "px";
    }
};

menuBtn.addEventListener('click', showMenu);




