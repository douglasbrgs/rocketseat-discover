// Qual usar?

// getElementById (element)
// getElementsByClassName (HTMLCollection)
// getElementsByTagName (HTMLCollection)
// querySelector (element)
// querySelectorAll (NodeList) ACEITA FOREACH!!!

// const element = document.getElementById('blog-title');
// console.log(element);

// const element = document.getElementsByClassName('one');
// console.log(element);

// const element = document.getElementsByTagName('meta');
// console.log(element);

// const element = document.querySelector('.one');
// console.log(element);

/*
 * querySelectorAll vs getElementsByClassName
 */

// NodeList
const elements = document.querySelectorAll('.one');

// HTMLCollection
// não aceita forEach
// const elements = document.getElementsByClassName('one');

elements.forEach(el => console.log(el));
