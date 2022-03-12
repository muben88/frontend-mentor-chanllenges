const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuBtn = document.querySelector('.hamburger-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('display-menu');
    mobileMenuBtn.classList.toggle('active-menu-color');
})