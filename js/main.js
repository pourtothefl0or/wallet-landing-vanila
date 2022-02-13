// === MAIN ===
console.log('monkasExtreme');

let accordion = document.querySelectorAll('.accordion__item');

accordion.forEach((el) => {
    el.addEventListener('click', () => {
        el.classList.toggle('accordion__item--active');
    });
});