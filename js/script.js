let burger = document.querySelector('.menu-burger')
let menu = document.querySelector('.menu')
let menuAbout = document.querySelector('.menu-about')

burger.addEventListener('click',(e)=> {
burger.classList.toggle('active-burger')
menu.classList.toggle('active-list')
menuAbout.classList.toggle('active-list')

})

