/// Eventos

// add via HTML
function print() {
    console.log('print');
}

// eventos de teclado
const input = document.querySelector('input');
input.onkeypress = function () {
    console.log('rodei');
};

// adicionando eventos via JS
const h2 = document.querySelector('h2');
h2.addEventListener('mouseout', print);

// adicionando eventos via JS (outro método)
// Preferir o addEventListener
const h3 = document.querySelector('h3');
h3.onclick = print;

// argumento event
const input2 = document.querySelector('#input2');
input2.onkeydown = function (event) {
    console.log(event.currentTarget.value);
};
