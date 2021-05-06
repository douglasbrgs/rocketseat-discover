/// Navegar pelos elementos

const body = document.querySelector('body');

/// Elemento pai

// parentNode e parentElement
// console.log(body.parentNode);
// console.log(body.parentElement);

/// Elementos Filhos

//childNodes e children
// console.log(body.childNodes);
// console.log(body.children);

// firstChild e firstElementChild
// console.log(body.firstChild);
// console.log(body.firstElementChild);

// lastChild e lastElementChild
// console.log(body.lastChild);
// console.log(body.lastElementChild);

/// Buscando irmãos

//nextSibling nextElementSibling
// const el = document.querySelector('header');
// console.log(el.nextSibling);
// console.log(el.nextElementSibling);

//previousSibling previousElementSibling
const el = document.querySelector('body script');
console.log(el.previousSibling);
console.log(el.previousElementSibling);
