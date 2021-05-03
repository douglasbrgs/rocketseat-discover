let one = 1;
let two = 2;

// igual
console.log(one == 1); // true
console.log(one == '1'); // true

// diferente
console.log(one != two); // true
console.log(one != 1); // false
console.log(one != one); // false

// estritamente igual (comparação de tipos)
console.log(one === '1'); // false
console.log('1' + 1); // '11' Problema!!!
console.log(one === 1); // true

// estritamente diferente
console.log(two !== '2'); // true
console.log(two !== 2); // false

// maior
console.log(one > two); // false

// maior igual
console.log(one >= 1); // true
console.log(two >= 1); // true

// menor
console.log(one < two); // true

// menor igual
console.log(one <= two); // true
console.log(one <= 1); // true
console.log(one <= 0); // false
