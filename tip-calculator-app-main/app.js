// Inputs
const bill = document.querySelector('#bill');
const numOfPeople = document.querySelector('#number_of_people');

const errorMsg = document.querySelector('.error');

// tips percentage selection:
const tip1 = document.querySelector('.tip-1');
const tip2 = document.querySelector('.tip-2');
const tip3 = document.querySelector('.tip-3');
const tip4 = document.querySelector('.tip-4');
const tip5 = document.querySelector('.tip-5');
const customTip = document.querySelector('#custom-tip');

// Reset button:
const resetBtn = document.querySelector('.reset-btn');
const enableBtn = () => {
    resetBtn.disabled = false;
    resetBtn.classList.remove('disabled-btn');
}
const disableBtn = () => {
    resetBtn.disabled = true;
    resetBtn.classList.add('disabled-btn');
}
disableBtn();

// results text area in the DOM:
const tipAmount = document.querySelector('.person-tip');
const total = document.querySelector('.total-tip');

// calculators:
const tipCalculator = (bill, tip, people) => {
    return ((bill * tip) / 100) / people;
}
const totalPrice = (bill, tip, people) => {
    return bill / people + tip;
};

let [btn1, btn2, btn3, btn4, btn5] = [false, false, false, false, false];

// function to make calculations, set numbers to the DOM and display errors if there is any:
const mainFunc = () => {
    if (customTip.value !== ''){

        errorMsg.style.display = 'none';
        numOfPeople.style.border = '1px solid var(--very_light_grayish_cyan)';

        const personTip = tipCalculator(parseInt(bill.value), parseInt(customTip.value), parseInt(numOfPeople.value));
        const totalResult = totalPrice(parseInt(bill.value), personTip, parseInt(numOfPeople.value));
        tipAmount.textContent = '$' + personTip;
        total.textContent = '$' + totalResult;
    }

    if (btn1){
        errorMsg.style.display = 'none';
        numOfPeople.style.border = '1px solid var(--very_light_grayish_cyan)';

        const personTip = tipCalculator(parseInt(bill.value), tip1.value, parseInt(numOfPeople.value));
        const totalResult = totalPrice(parseInt(bill.value), personTip, parseInt(numOfPeople.value));
        tipAmount.textContent = '$' + personTip;
        total.textContent = '$' + totalResult;
    }
    if (btn2){
        errorMsg.style.display = 'none';
        numOfPeople.style.border = '1px solid var(--very_light_grayish_cyan)';

        const personTip = tipCalculator(parseInt(bill.value), tip2.value, parseInt(numOfPeople.value));
        const totalResult = totalPrice(parseInt(bill.value), personTip, parseInt(numOfPeople.value));
        tipAmount.textContent = '$' + personTip;
        total.textContent = '$' + totalResult;
    }
    if (btn3){
        errorMsg.style.display = 'none';
        numOfPeople.style.border = '1px solid var(--very_light_grayish_cyan)';

        const personTip = tipCalculator(parseInt(bill.value), tip3.value, parseInt(numOfPeople.value));
        const totalResult = totalPrice(parseInt(bill.value), personTip, parseInt(numOfPeople.value));
        tipAmount.textContent = '$' + personTip;
        total.textContent = '$' + totalResult;
    }
    if (btn4){
        errorMsg.style.display = 'none';
        numOfPeople.style.border = '1px solid var(--very_light_grayish_cyan)';

        const personTip = tipCalculator(parseInt(bill.value), tip4.value, parseInt(numOfPeople.value));
        const totalResult = totalPrice(parseInt(bill.value), personTip, parseInt(numOfPeople.value));
        tipAmount.textContent = '$' + personTip;
        total.textContent = '$' + totalResult;
    }
    if (btn5){
        errorMsg.style.display = 'none';
        numOfPeople.style.border = '1px solid var(--very_light_grayish_cyan)';

        const personTip = tipCalculator(parseInt(bill.value), tip5.value, parseInt(numOfPeople.value));
        const totalResult = totalPrice(parseInt(bill.value), personTip, parseInt(numOfPeople.value));
        tipAmount.textContent = '$' + personTip;
        total.textContent = '$' + totalResult;
    }

    if (numOfPeople.value == ''){
        errorMsg.style.display = 'block'
        numOfPeople.style.border = '1px solid red';
    }

    if (numOfPeople.value == '' 
        || !btn1 && !btn2 && !btn3 && !btn4 && !btn5 && customTip.value == '' 
        || bill.value == '')
        {
            resetBtn.disabled = true;
            tipAmount.textContent = '$0.00';
            total.textContent = '$0.00'
        }
}

tip1.addEventListener('click', () => {
    btn1 = true;
    btn2 = false;
    btn3 = false;
    btn4 = false;
    btn5 = false;

    tip1.classList.toggle('active');
    tip2.classList.remove('active');
    tip3.classList.remove('active');
    tip4.classList.remove('active');
    tip5.classList.remove('active');
    customTip.value = '';

    mainFunc();
    enableBtn();
})

tip2.addEventListener('click', () => {
    btn1 = false;
    btn2 = true;
    btn3 = false;
    btn4 = false;
    btn5 = false;

    tip2.classList.toggle('active');
    tip1.classList.remove('active');
    tip3.classList.remove('active');
    tip4.classList.remove('active');
    tip5.classList.remove('active');
    customTip.value = '';
    mainFunc();
    enableBtn();
})

tip3.addEventListener('click', () => {
    btn1 = false;
    btn2 = false;
    btn3 = true;
    btn4 = false;
    btn5 = false;

    tip3.classList.toggle('active');
    tip2.classList.remove('active');
    tip1.classList.remove('active');
    tip4.classList.remove('active');
    tip5.classList.remove('active');
    customTip.value = '';
    mainFunc();
    enableBtn();
})

tip4.addEventListener('click', () => {
    btn1 = false;
    btn2 = false;
    btn3 = false;
    btn4 = true;
    btn5 = false;

    tip4.classList.toggle('active');
    tip2.classList.remove('active');
    tip3.classList.remove('active');
    tip1.classList.remove('active');
    tip5.classList.remove('active');
    customTip.value = '';
    mainFunc();
    enableBtn();
})

tip5.addEventListener('click', () => {
    btn1 = false;
    btn2 = false;
    btn3 = false;
    btn4 = false;
    btn5 = true;

    tip5.classList.toggle('active');
    tip2.classList.remove('active');
    tip3.classList.remove('active');
    tip4.classList.remove('active');
    tip1.classList.remove('active');
    customTip.value = '';
    mainFunc();
    enableBtn();
})

customTip.addEventListener('input', () => {
    btn1 = false;
    btn2 = false;
    btn3 = false;
    btn4 = false;
    btn5 = false;

    tip5.classList.remove('active');
    tip2.classList.remove('active');
    tip3.classList.remove('active');
    tip4.classList.remove('active');
    tip1.classList.remove('active');
    mainFunc();
    enableBtn();
})

numOfPeople.addEventListener('input', () => {
    mainFunc();
    enableBtn();
})

bill.addEventListener('input', () => {
    mainFunc();
    enableBtn();
})

resetBtn.addEventListener('click', () => {
    bill.value = '';
    customTip.value = '';
    numOfPeople.value = '';
    tipAmount.textContent = '$0.00';
    total.textContent = '$0.00';
    tip1.classList.remove('active');
    tip5.classList.remove('active');
    tip2.classList.remove('active');
    tip3.classList.remove('active');
    tip4.classList.remove('active');
    errorMsg.style.display = 'none';
    numOfPeople.style.border = '1px solid var(--very_light_grayish_cyan)';
    disableBtn();
})