const adviceNum = document.querySelector('.advice_num');
const quote = document.querySelector('.quote');
const btn = document.querySelector('.btn');

const api = 'https://api.adviceslip.com/advice/';


btn.addEventListener('click', () => {

    let rand = Math.floor(Math.random() * 225);
    fetch( api + rand )
        .then( response => response.json())
        .then( data => {

            let obj = data.slip;
            let id = obj.id;
            let advice = obj.advice;

            adviceNum.classList.remove('error');
            quote.classList.remove('error');

            adviceNum.textContent = `Advice #${id}`;
            quote.textContent = `"${advice}"`;

        })
        .catch ( (err) => {

            adviceNum.classList.add('error');
            quote.classList.add('error');

            adviceNum.textContent = `Error!`;
            quote.textContent = `"Sorry! Try again!"`;
            console.log(err);
        })
})