let buttons = document.querySelectorAll(".single-faq"); 
let boxImg = document.querySelector('.box-img');

for ( let i = 0; i < buttons.length; i++ ) {
    buttons[i].addEventListener("click", function() {

        this.firstElementChild.classList.toggle('h2-weight');
        this.lastElementChild.classList.toggle('flip-icon');
        // boxImg.classList.toggle('active');

        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = 'none';
            boxImg.classList = '';
        } else {
            panel.style.display = 'block';
            boxImg.classList = 'active';
        } 
    });
};