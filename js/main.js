const cartBtn = document.querySelector('.cart_btn'),
        modal = document.querySelector('.modal'),
        closeBtn = document.querySelector('.btn_close'),
        cancelBtn = document.querySelector('.btn_cancel');

cartBtn.addEventListener('click',()=>{
    modal.classList.add('modal_show');
});
closeBtn.addEventListener('click', ()=>{
    modal.classList.remove('modal_show');
});
cancelBtn.addEventListener('click', ()=>{
    modal.classList.remove('modal_show');
})
