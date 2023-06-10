
const mostrarMenu = (headerToggle, navbarId)=>{
    const toggleBtn = document.getElementById(headerToggle);
    const nav = document.getElementById(navbarId);

    if(headerToggle && navbarId){
        toggleBtn.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu');
            toggleBtn.classList.toggle('bx-x');
        })
    }
}

mostrarMenu('header-toggle', 'navbar');

const linkColor = document.querySelectorAll('.nav__link');
function colorLink(){
    linkColor.forEach(item => item.classList.remove('active'))
    this.classList.add('active');
}

linkColor.forEach(item => item.addEventListener('click', colorLink));