let burger = document.querySelector('.menu-burger')
let menu = document.querySelector('.menu')
burger.addEventListener('click',(e)=> {
burger.classList.toggle('active-burger')
menu.classList.toggle('active-list')
})