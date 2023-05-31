
const head = document.querySelector('.head');
const eyes = document.querySelector('.eyes');
const ears = document.querySelector('.ears');
const nose = document.querySelector('.nose');
const snout = document.querySelector('.snout');
//const textoT = document.querySelector('.textoT');
//const textoL = document.querySelector('.textoL');

let cursorPosition = {x:0, y:0};
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

function tamanoPantalla(){
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
}

function mouseMove(e){
    cursorPosition = {x:e.clientX, y:e.clientY};
    seguimientoMouse();
}
function touchMove(e){
    cursorPosition = {x:e.targetTouche[0].offsetX, y:e.targetTouche[0].offsetY};
    seguimientoMouse();
}

const seguirCursor = (el,xRelacion, yRelacion) =>{
    const elOffset = el.getBoundingClientRect(); // trae cuanto se traslada en cordenadas X e Y
    const centerX = elOffset.x + elOffset.width / 2;
    const centerY = elOffset.y + elOffset.height / 2;
    const distLeft = Math.round(((cursorPosition.x - centerX)*100)/window.innerWidth); //Le resto el centro para saber en que coordenada esta el cursor
    const distTop = Math.round(((cursorPosition.y - centerY)*100)/window.innerHeight); //Le resto el centro para saber en que coordenada esta el cursor
    //textoT.innerText=distTop;
    //textoL.innerText=distLeft;

    el.style.transform =`translate(${distLeft/xRelacion}px, ${distTop/yRelacion}px)`; //style css
}
const seguimientoMouse = ()=>{
    if(head)seguirCursor(head, 2.8, 2.8)
    if(eyes)seguirCursor(eyes, 2.8, 2.8)
    if(ears)seguirCursor(ears, -8, -2.2)
    if(nose)seguirCursor(nose, 1.2, 1.2)
    if(snout)seguirCursor(snout, 2.2, 2.2)
}

window.addEventListener('resize', tamanoPantalla);  // para cuando cambia el tamaño de la pantalla
window.addEventListener('mousemove', mouseMove);    //  
window.addEventListener('touchmove', touchMove);