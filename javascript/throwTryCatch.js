// throw

function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório'; // para a execução
    }
    console.log(name);
}

// sem o try...catch a aplicação é encerrada após um throw
// sayMyName();
// console.log('após a função de erro');

// try...catch
// nessa abordagem a aplicação continua após um throw
try {
    sayMyName('');
} catch (e) {
    console.log(e);
}
console.log('após o try/catch');
