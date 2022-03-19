const doc = document.querySelector('body');
const switchBtn = document.querySelector('input');
const card = document.querySelectorAll('#card_block');
const balckText = document.querySelectorAll('#card-text-black');
const greyText = document.querySelectorAll('#card-text-grey');
const bgTop = document.querySelector('.bg_top');
const fbFollowers = document.querySelector('#fb_count');

console.log(balckText)

switchBtn.addEventListener('input', () => {
    doc.classList.toggle('bg');
    bgTop.classList.toggle('bg_top_light');
    fbFollowers.classList.toggle('increase_clr');
    cardTog();
    black();
    light();
})

const cardTog = () => {
    card.forEach((item) => {
        item.classList.toggle('card_bg_light');
    });
    balckText.forEach((item) => {
        item.classList.toggle('text_black');
    });
    greyText.forEach((item) => {
        item.classList.toggle('text_grey');
    })
}