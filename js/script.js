let burger = document.querySelector('.menu-burger')
let menu = document.querySelector('.menu')
// let menuAbout = document.querySelector('.menu-about')

burger.addEventListener('click',(e)=> {
burger.classList.toggle('active-burger')
menu.classList.toggle('active-list')
// menuAbout.classList.toggle('active-list')

})

const modal = document.querySelector('.modal');
const modalButton =document.getElementById('modal__close-button');
const showModal=document.getElementById('show-modal')

modalButton.onclick=function(){
 modal.style.visibility='hidden';

}
showModal.onclick=function(){
    modal.style.visibility='visible';

}