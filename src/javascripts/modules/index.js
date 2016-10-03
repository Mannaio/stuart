/*
Menu bar js for mobile
*/

function classToggle() {
    var el = document.querySelector("body")
    el.classList.toggle('-menu-expanded');
}
document.querySelector('.nav__listItem--menu').addEventListener('click', classToggle);
document.querySelector('.close').addEventListener('click', classToggle);
