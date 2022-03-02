const newPara = document.querySelector('.content');
const input = document.querySelector('.email_input');
const button = document.querySelector('.btn');
const errorImg = document.querySelector('.error_icon');
const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const message = document.createElement('p');
const errorIcon = document.querySelector('.error_icon');


button.addEventListener('click', (e) => {
    e.preventDefault();

    if (input.value === '') {
        message.textContent = 'Please enter your email address!';
        message.classList.remove('success');
        message.classList.add('error');
        input.classList.add('border_error');
        errorIcon.style.display = 'block';
        newPara.append(message);
    } 
    else if (!input.value.match(pattern)) {
        message.textContent = 'Please provide a valid email address!';
        message.classList.remove('success');
        message.classList.add('error');
        input.classList.add('border_error');
        errorIcon.style.display = 'block';
        newPara.append(message);
    }
    else {
        message.textContent = 'Thank you for subscribing to our newsletter!';
        message.classList.add('success');
        input.classList.remove('border_error');
        input.classList.add('border_success');
        errorIcon.style.display = 'none';
        newPara.append(message);
    }
})