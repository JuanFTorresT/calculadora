let display = document.getElementById('display');

let numeros = document.querySelectorAll("button");

//console.log(typeof display.innerHTML);


for (const numero of numeros) {
    
    numero.addEventListener("click", () =>{

        
        if ( numero.id === "ac" ) {
            display.innerHTML = "";
        }else if ( numero.id === "btn-equal" && display.innerHTML !== "" ) {
            display.innerHTML = eval( display.innerHTML )
        }else if ( numero.id === "erase" && display.innerHTML !== "" ) {
            let string = display.innerHTML.toString();
            
            display.innerHTML = string.substring(0, string.length-1);
        }else if ( (numero.id === "erase" || numero.id === "btn-equal" || numero.id === "+" || numero.id === "-" || numero.id === "*" || numero.id ==="/") && display.innerHTML === "" ){
            display.innerHTML = "";
        }else{

            display.innerHTML += numero.id;
            display.scrollTop = display.scrollHeight;
            display.readOnly = true;
            
        }
        

        
    })
}

const botonLight = document.querySelector("#dark");
const calculator = document.querySelector(".calculadora-wrapper")
const iconlight = document.querySelector("ion-icon")

let islight = true;

botonLight.onclick=()=>{
    calculator.classList.toggle("light");
    botonLight.classList.toggle("dark");
    islight = !islight;
}