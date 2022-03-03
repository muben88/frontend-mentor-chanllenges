const form = document.querySelector('form');
const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const email = document.querySelector('#email_address');
const password = document.querySelector('#password');
const btn = document.querySelector('.btn');
const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const firstNameErrorImg = document.querySelector('.first_name_error');
const lastNameErrorImg = document.querySelector('.last_name_error');
const emailErrorImg = document.querySelector('.email_address_error');
const passwordErrorImg = document.querySelector('.password_error');

const errorMsg = document.createElement('p');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    if (firstName.value.trim() === '') {
        errorMsg.textContent = 'First Name cannot be empty';

        lastName.classList.remove('input_margin');
        email.classList.remove('input_margin');
        password.classList.remove('input_margin');
        errorMsg.classList.remove('success_msg');

        lastNameErrorImg.classList.remove('display');
        emailErrorImg.classList.remove('display');
        passwordErrorImg.classList.remove('display');

        firstNameErrorImg.classList.add('display');
        firstName.classList.add('input_margin');
        errorMsg.classList.add('error_msg', 'first_name_err_msg');
        form.append(errorMsg);
    } 
    else if (lastName.value.trim() === '') {
        errorMsg.textContent = 'Last Name cannot be empty';

        firstName.classList.remove('input_margin');
        email.classList.remove('input_margin');
        password.classList.remove('input_margin');
        firstNameErrorImg.classList.remove('display');
        emailErrorImg.classList.remove('display');
        passwordErrorImg.classList.remove('display');
        errorMsg.classList.remove('success_msg');

        lastNameErrorImg.classList.add('display');
        lastName.classList.add('input_margin');
        errorMsg.classList.add('error_msg', 'last_name_err_msg');
        form.append(errorMsg);
    } 
    else if (!email.value.match(pattern)) {
        errorMsg.textContent = 'Looks like this is not an email';

        firstName.classList.remove('input_margin');
        lastName.classList.remove('input_margin');
        password.classList.remove('input_margin');
        firstNameErrorImg.classList.remove('display');
        lastNameErrorImg.classList.remove('display');
        passwordErrorImg.classList.remove('display');
        errorMsg.classList.remove('success_msg');

        emailErrorImg.classList.add('display');
        email.classList.add('input_margin');
        errorMsg.classList.add('error_msg', 'email_err_msg');
        form.append(errorMsg);
    }
    else if (password.value.trim() === '') {
        errorMsg.textContent = 'Password cannot be empty';

        firstName.classList.remove('input_margin');
        lastName.classList.remove('input_margin');
        email.classList.remove('input_margin');
        firstNameErrorImg.classList.remove('display');
        lastNameErrorImg.classList.remove('display');
        emailErrorImg.classList.remove('display');
        errorMsg.classList.remove('success_msg');

        passwordErrorImg.classList.add('display');
        password.classList.add('input_margin');
        errorMsg.classList.add('error_msg', 'password_err_msg');
        form.append(errorMsg);
    } else {
        errorMsg.textContent = "Your trial has been successfully claimed & it's valid for 7 days!";

        firstName.classList.remove('input_margin');
        lastName.classList.remove('input_margin');
        email.classList.remove('input_margin');
        password.classList.remove('input_margin');
        errorMsg.classList.remove('error_msg', 'password_err_msg');
        firstNameErrorImg.classList.remove('display');
        lastNameErrorImg.classList.remove('display');
        emailErrorImg.classList.remove('display');
        passwordErrorImg.classList.remove('display');

        errorMsg.classList.add('success_msg');
        form.append(errorMsg);
    }
})
