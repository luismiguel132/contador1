document.getElementById("number__add");
document.getElementById("number__reset");
document.getElementById("number__remove");
document.getElementById("numeros")

const displayNumero = document.querySelector(".numeros");

let numeros = 0;

function add() {
    numeros += 1; 
    atualizarDisplay(); 
}

function reset() {
    numeros = 0;
    atualizarDisplay()
}

function remove() {
    numeros -= 1;
    atualizarDisplay()
}


function atualizarDisplay() {
    displayNumero.textContent = numeros;
}

atualizarDisplay();
