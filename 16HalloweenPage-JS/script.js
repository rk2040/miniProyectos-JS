
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
    })
}
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    })
}

// SCROLL REVEAL
const sr = ScrollReveal( {
    origin: 'top',
    distance: '6rem',
    duration: 2000,
    delay: 400,
    reset: true // para que vuelva a hacer el efecto para que al hacer scroll tambien haga efecto
} )
sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`)