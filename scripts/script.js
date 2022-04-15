const menuCheckBox = document.querySelector('.menu__checkbox');
const menuItems = document.querySelectorAll('.menu__list > li')

function hideMenu() {
    menuCheckBox.checked = false;
};

menuItems.forEach(el => {
    el.addEventListener('click', hideMenu);
});




