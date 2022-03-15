const slider = document.querySelector('.slider');
const switchBtn = document.querySelector('.checkbox');
const pageviews = document.querySelector('#pageviews');
const monthlyPrice = document.querySelector('.price');
const monthlyYearly = document.querySelector('.monthly');


const monthPriceCalculator = () => {
    const value = slider.value;
    if (value <= 20){
        monthlyPrice.textContent = '$8.00';
        pageviews.textContent = '80k';
    }

    if (value > 20 && value <= 50) {
        monthlyPrice.textContent = '$16.00';
        pageviews.textContent = '100k';
    }

    if (value > 50) {
        monthlyPrice.textContent = '$32.00';
        pageviews.textContent = '140k';
    }
}

const yearPriceCalculator = () => {
    const value = slider.value;
    if (value <= 20){
        monthlyPrice.textContent = '$6.00';
        pageviews.textContent = '80k';
    }

    if (value > 20 && value <= 50) {
        monthlyPrice.textContent = '$12.00';
        pageviews.textContent = '100k';
    }

    if (value > 50) {
        monthlyPrice.textContent = '$24.00';
        pageviews.textContent = '140k';
    }
}


slider.addEventListener("input", () => {
    const currentValue = slider.value;
    const currentColor = `linear-gradient(90deg, var(--soft_cyan) ${currentValue}%, var(--light_grayish_blue) ${currentValue}%)`;
    slider.style.background = currentColor;

    if (switchBtn.checked) {
        yearPriceCalculator();
    }

    if (!switchBtn.checked) {
        monthPriceCalculator();
    }
});

switchBtn.addEventListener('input', () => {
    if (switchBtn.checked) {
        monthlyYearly.textContent = '/year';
        yearPriceCalculator();
    }
    if (!switchBtn.checked) {
        monthlyYearly.textContent = '/month';
        monthPriceCalculator();
    }
})
