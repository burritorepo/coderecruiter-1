
let cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    console.log(card);
    card.addEventListener('click', (e) => {
        card.classList.toggle('is-flipped');
    });
});
