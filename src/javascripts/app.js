import './modules'

console.log(`app.js has loaded!`)

function classToggle() {
    var el = document.querySelector("body")
    el.classList.toggle('-menu-expanded');
}
document.querySelector('.nav__listItem--menu').addEventListener('click', classToggle);
document.querySelector('.close').addEventListener('click', classToggle);
