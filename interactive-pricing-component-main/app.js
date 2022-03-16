const slider = document.querySelector('.slider');
const switchBtn = document.querySelector('.checkbox');
const pageviews = document.querySelector('#pageviews');
const monthlyPrice = document.querySelector('.price');
const monthlyYearly = document.querySelector('.monthly');


const monthlyCalculator = (curr) => {
    return Math.floor(curr / 3.125);
}

const yearlyCalculator = (curr) => {
    return Math.floor(monthlyCalculator(curr) - monthlyCalculator(curr) * 25 / 100);
}

const pageviewsCal = (curr) => {
    return Math.floor(100 * (monthlyCalculator(curr) / 16));
}

slider.addEventListener("input", () => {
    const currentValue = slider.value;
    const currentColor = `linear-gradient(90deg, var(--soft_cyan) ${currentValue}%, var(--light_grayish_blue) ${currentValue}%)`;
    slider.style.background = currentColor;
    
    pageviews.textContent = `${pageviewsCal(currentValue)}K`;

    if (switchBtn.checked) {
        monthlyPrice.textContent = `$${yearlyCalculator(currentValue)}.00`;
    }
    if (!switchBtn.checked) {
        monthlyPrice.textContent = `$${monthlyCalculator(currentValue)}.00`;
    }
});

switchBtn.addEventListener('input', () => {
    const currentValue = slider.value;
    if (switchBtn.checked) {
        if (currentValue === 0){
        monthlyPrice.textContent = `$1.00/year`;
        }
        monthlyYearly.textContent = '/year';
        monthlyPrice.textContent = `$${yearlyCalculator(currentValue)}.00`;
    }
    if (!switchBtn.checked) {
        if (currentValue === 0){
        monthlyPrice.textContent = `$1.00/month`;
        }
        monthlyYearly.textContent = '/month';
        monthlyPrice.textContent = `$${monthlyCalculator(currentValue)}.00`;
    }
})
