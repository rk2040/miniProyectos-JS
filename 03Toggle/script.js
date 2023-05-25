
let toggleBtn = document.querySelector('.toggleBtn');

let container = document.querySelector('.container');

toggleBtn.onclick = ()=>{
    container.classList.toggle('active')  //metodo toggle ya esta en js
}