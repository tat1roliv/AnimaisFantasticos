/*
outerHtml,
innerHtml,
innerText
*/

const menu = document.querySelector('.menu');

console.log(menu.outerHTML); //todo html do elemento
console.log(menu.innerHTML); //html interno
console.log(menu.innerText); //texto, sem tags

const h1 = document.querySelector('h1');

h1.innerText = 'titulo 1';//substitui conteudo
h1.innerHTML = '<p>Novo h1</p>'//acrescenta filho
h1.outerHTML = '<h2>Novo h1 trocando</h2>'//substitui



/*
transversing
navegação pelo dom
*/
const lista = document.querySelector('.animais-lista');

lista.parentElement; //pai
lista.parentElement.parentElement; //pai do pai ate  o html
lista.previousElementSibling; //elemento anterior
lista.nextElementSibling; //elemento posterior

lista.children; //HTMLCollection com filhos
lista.children[0];//primeiro filho
lista.children[lista.children.length-1];//ultimo filho

lista.querySelectorAll('li');
lista.querySelector('li:last-child');




/*
manipulando elementos
*/

const lista = document.querySelector('.animais-lista');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

contato.appendChild(lista); //move lista para o final de contato
contato.insertBefore(lista, titulo);
contato.removeChild(titulo);
contato.replaceChild(lista, titulo);





/*
novos elementos
*/

const animais = document.querySelector('.animais');

const novoH1 = document.createElement('h1');
novoH1.innerHTML = 'novo texto';
novoH1.classList.add('titulo');

animais.appendChild(novoH1); //move





/*
clonar elementos
*/

const titulo = document.querySelector('h1');

const cloneTitulo = titulo.cloneNode(true);
const contato = document.querySelector('.contato');
contato.appendChild(cloneTitulo);




