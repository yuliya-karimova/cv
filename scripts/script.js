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

console.log("Самооценка 160/150:\n1) вёрстка валидная +10\n2) вёрстка семантическая (по 2 балла за каждый тег, максимум 20) +20:\n    1. h1 +2\n    2. h2 +2\n    3. h3 +2\n    4. h4 +2\n    5. section +2\n    6. nav +2\n    7. header +2\n    8. main +2\n    9. footer +2\n    10. time +2\n    11. figure +2\n    12. figcaption +2\n3) для оформления СV используются css-стили +10\n4) контент размещается в блоке, который горизонтально центрируется на странице (фонового цвета нет) +10\n5) вёрстка адаптивная +10");



