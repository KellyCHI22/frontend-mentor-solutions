const open = document.querySelector("#icon-open");
const close = document.querySelector("#icon-close");
const sidenav = document.querySelector(".nav__list");

open.addEventListener('click', () => {
    sidenav.classList.add('active');
});

close.addEventListener('click', () => {
    sidenav.classList.remove('active');
});