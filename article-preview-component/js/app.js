let showBtn = document.querySelectorAll('.share_btn');
let popup = document.querySelector('.show_share');

console.log(showBtn)

for (let i = 0; i < showBtn.length; i++){
    console.log(showBtn[i])
    showBtn[i].addEventListener('click', () => {
        popup.classList.toggle('show_hide');
    })
}