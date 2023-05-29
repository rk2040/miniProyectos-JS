
function toggleMenu(){
    const menuIcon = document.querySelector('.menuIcon');
    const navBar = document.getElementById('navbar');

    menuIcon.classList.toggle('active');
    navBar.classList.toggle('active');
}

const sliderShow = document.getElementById('sliderShow');
const slider = sliderShow.getElementsByTagName('video');
let index = 0;


const sliderShowText = document.getElementById('sliderShowText');
const sliderTexto = sliderShowText.getElementsByTagName('div');
let indexText = 0;


function nextSlider(){
    slider[index].classList.remove('active');
    index = (index +1) % slider.length; //cuando llega a 4, el resultado de modulo da 0 (vuelve index a 0)
    slider[index].classList.add('active');
}

function prevSlider(){
    slider[index].classList.remove('active');
    index = (index - 1 + slider.length) % slider.length;
    slider[index].classList.add('active');
}

function nextSliderText(){
    sliderTexto[indexText].classList.remove('active');
    indexText = (indexText +1) % sliderTexto.length; //cuando llega a 4, el resultado de modulo da 0 (vuelve index a 0)
    sliderTexto[indexText].classList.add('active');
}

function prevSliderText(){
    sliderTexto[indexText].classList.remove('active');
    indexText = (indexText - 1 + sliderTexto.length) % slider.length;
    sliderTexto[indexText].classList.add('active');
}