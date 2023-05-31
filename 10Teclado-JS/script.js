
const keys = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]; //1234567890

function getRandomNumber(min, max){
    min = Math.ceil(min);   // iguala al mas proximo mayor
    max = Math.floor(max);  // devuelve el entero mas grande sin el decimal
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function getRandomKey(){
    return keys[getRandomNumber(0, keys.length-1)]
}

function targetRandomKey(){
    const key = document.getElementById(getRandomKey());
    key.classList.add('selected');
}

document.addEventListener('keyup', event=>{
    const keyPressed = String.fromCharCode(event.keyCode);
    const keyElement = document.getElementById(keyPressed);
    const highlightedKey = document.querySelector('.selected');
    keyElement.classList.add('hit');
    keyElement.addEventListener('animationend', ()=>{   //termina una animacion y
        keyElement.classList.remove('hit')          // "elimina" la class hit
    });

    if(keyPressed === highlightedKey.innerHTML){    // si coincide la tecla apretada
        highlightedKey.classList.remove('selected');  // borro la clase selected
        targetRandomKey();  // y vuelvo a llamar para generar una tecla random
    }
})

targetRandomKey();  // cada qwue cargo la pagina, genera una tecla ramdon para vibrar