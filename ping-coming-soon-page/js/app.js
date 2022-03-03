const form = document.querySelector('.form');
const input = document.querySelector('input');
const btn = document.querySelector('.btn');
const errMsg = document.querySelector('.errMsg');
const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;


btn.addEventListener('click', (e) => {
    e.preventDefault();

    if (input.value.trim() === '' || !input.value.match(pattern)){
        errMsg.textContent = 'Please provide a valid email address';
        input.classList.add('margin');
        errMsg.classList.remove('success');
        errMsg.classList.add('error');
        form.append(errMsg);
    } else {
        errMsg.textContent = 'Thank you! We will notify you when we launch!';
        input.classList.add('margin');
        errMsg.classList.remove('error');
        errMsg.classList.add('success');
        form.append(errMsg);
    }
})
