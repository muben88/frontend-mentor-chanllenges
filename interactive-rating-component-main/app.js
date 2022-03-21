const firstPage = document.querySelector('.rate_us');
const thankYouPage = document.querySelector('.thank_you_page');
const ratingBtn = document.querySelectorAll('.rating_btn');
const submitBtn = document.querySelector('.submit_btn');
const ratingDisplay = document.querySelector('#rating');

const rating1 = document.querySelector('#rate_1');
const rating2 = document.querySelector('#rate_2');
const rating3 = document.querySelector('#rate_3');
const rating4 = document.querySelector('#rate_4');
const rating5 = document.querySelector('#rate_5');

let res;

ratingBtn.forEach( item => item.addEventListener('click', () => res = item.value));

submitBtn.addEventListener('click', () => {
    if (res !== undefined){
        thankYouPage.classList.remove('hide_section');
        firstPage.classList.add('hide_section');
        ratingDisplay.textContent = res;
    }
})


const clicked = (item1, item2, item3, item4, item5) => {
    item1.classList.add('active_button');
    item2.classList.remove('active_button');
    item3.classList.remove('active_button');
    item4.classList.remove('active_button');
    item5.classList.remove('active_button');
}

rating1.addEventListener('click', () => {
    clicked(rating1, rating2, rating3, rating4, rating5);
})

rating2.addEventListener('click', () => {
    clicked(rating2, rating1, rating3, rating4, rating5);
})

rating3.addEventListener('click', () => {
    clicked(rating3, rating1, rating2, rating4, rating5);
})

rating4.addEventListener('click', () => {
    clicked(rating4, rating1, rating3, rating2, rating5);
})

rating5.addEventListener('click', () => {
    clicked(rating5, rating1, rating3, rating4, rating2);
})
