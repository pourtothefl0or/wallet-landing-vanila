// === MAIN ===
console.log('monkasExtreme');

let accordion = document.querySelectorAll('.accordion__item');

accordion.forEach((el) => {
    el.addEventListener('click', () => {
        el.classList.toggle('accordion__item--active');
    });
});

const body = document.querySelector('body');
const burgerMenu = document.querySelector('.header-list');
const burgerBtn = document.querySelector('.btn-burger');

burgerBtn.addEventListener('click', () => {
    body.classList.toggle('scroll-disabled');
    burgerMenu.classList.toggle('header-list--active');
    burgerBtn.classList.toggle('btn-burger--active');
});
