// Alterando estilo

const element = document.querySelector('body');
// element.style.backgroundColor = 'blue';
console.log(element.style.backgroundColor);

// classList
console.log(element.classList);

element.classList.add('active', 'green');

element.classList.remove('active');

// add ou remove
element.classList.toggle('active');
