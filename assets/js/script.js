const btnMenu = document.querySelector('.btn__menu');
const btnClose = document.querySelector('.btn__close');
const Menu = document.querySelector('.navbar__menu');
const navbarItem = (document.querySelectorAll('.navbar__item'))
btnMenu.onclick = function () {
    Menu.classList.add('show--menu')
}
btnClose.onclick = function () {
    Menu.classList.remove('show--menu')
}
for (item of navbarItem) {
    item.onclick = function () {
        Menu.classList.remove('show--menu')
    }
}