let techs = ['html', 'css', 'js'];

// add item ao fim
techs.push('nodejs');

// add ao começo
techs.unshift('sql');

// remover do fim (pop)
// techs.pop();

// remover do começo (shift)
// techs.shift();

// pegar somente alguns elementos do array
// console.log(techs.slice(1, 3));
console.log(techs.slice(2, -1));

// remover 1 ou mais item em qualquer posição do array (splice)
// techs.splice(1, 2);

// encontrar a posição de um elemento no array (indexOf)
let index = techs.indexOf('html');
techs.splice(index, 1);

console.log(techs);
