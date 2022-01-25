const menu = document.querySelector('.menu');
console.log(menu.className); // string
console.log(menu.classList); // lista de classes
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile'); // multiplas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); // adiciona/remove a classe
menu.classList.contains('ativo'); // true ou false
menu.classList.replace('ativo', 'inativo');

if (menu.classList.contains('mobile')) {
    menu.classList.add('blue');
} else{
    menu.classList.add('green');
}

menu.className = menu.className + " red";
console.log(menu.className);

/**/
/*
attributes
Retorna uma array-like com os atributos do elemento
*/
const animais = document.querySelector('.animais');
console.log(animais.attributes); // retorna todos os atributos
console.log(animais.attributes[0]); // retorna o primeiro atributo

/*
getters setters
*/
const img = document.querySelector('img');
const srcImg = img.getAttribute('src'); // valor do src
console.log(srcImg);
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
img.hasAttribute('id'); // true / false
img.removeAttribute('alt'); // remove o alt
console.log(img.hasAttributes('alt')); // true / false se tem algum atributo


