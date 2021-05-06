/// Criando e adicionando elementos

const div = document.createElement('div');
div.innerText = 'Olá Devs';

const body = document.querySelector('body');

// body.append(div);
// body.prepend(div);

/// insertBefore (inserir ANTES)

// const script = body.querySelector('script');
// body.insertBefore(div, script);

// como inserir depois?
const header = document.querySelector('header');
// insere antes do proximo irmão do header
// ou seja, depois do header
body.insertBefore(div, header.nextElementSibling);
