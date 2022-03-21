const switchBtn = document.querySelector('input');
const basicPrice = document.querySelector('#basic-price');
const proPrice = document.querySelector('#professional-price');
const masterPrice = document.querySelector('#master-price');  

switchBtn.addEventListener('click', () => {
    if (switchBtn.checked) {
        basicPrice.textContent = 19.99;
        proPrice.textContent = 24.99;
        masterPrice.textContent = 39.99; 
    } else {
        basicPrice.textContent = 199.99;
        proPrice.textContent = 249.99;
        masterPrice.textContent = 399.99; 
    }
})
