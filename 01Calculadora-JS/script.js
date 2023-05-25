
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

//Recorro el array de botones con forEach para reconocer cual estoy dando click
buttons.forEach( (item)=>{
    item.onclick=()=>{
        
        if(item.id == "clear"){
            display.innerText="";
        }
        else if(item.id == "backspace"){
            display.innerText = display.innerText.slice(0, -1);
        }
        else if(display.innerText != "" && item.id == "equal"){
            display.innerText = eval(display.innerText); // eval evalua la cadena string como una operacion
        }
        else if(display.innerText == "" && item.id == "equal"){
            display.innerText = "Null";
            setTimeout( ()=>(
                display.innerText = ""
            ),1500);
        }
        else{
            display.innerText += item.id;
        }
    }
});

const btnThemeToggle = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");

let isDark = true;

btnThemeToggle.onclick = ()=>{
    calculator.classList.toggle("dark")
    btnThemeToggle.classList.toggle("active")
    isDark != isDark;
}