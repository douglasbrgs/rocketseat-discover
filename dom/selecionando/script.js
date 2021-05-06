// Manipulando conteúdo

const element = document.querySelector('h1');

//textContent
//element.textContent += ' Olá Devs!'
//console.log(element.textContent);

// innerText
//element.innerText = "Olá Devs!"

//innerHtml
//element.innerHTML = "Olá Devs! <small>!!!</>"

// value
const element2 = document.querySelector('input');

// console.log(element2.value);
// element2.value = 'Valor que eu quiser';

// atributos
const header = document.querySelector('header');

// seta atributo
header.setAttribute('id', 'header');

const headerID = document.querySelector('#header');

// pega atributo
console.log(headerID.getAttribute('class'));

// remove atributo
header.removeAttribute('id');

header.setAttribute('class', 'bg header');
