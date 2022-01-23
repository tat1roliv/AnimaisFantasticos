/*
seletor geral, querySelector
*/

const animais = document.querySelector('.animais');
const contato = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector('ul');
const navItem = primeiroUl.querySelector('li');


/*
querySelectorAll
*/
const gridSection = document.querySelectorAll('.grid-section');
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais-lista img');


/*
outros
*/

// Seleciona pelo ID, retorna null caso não exista
const animaisSection = document.getElementById('animais');
const naoExiste = document.getElementById('teste');

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName('grid-section');

// Seleciona por tag, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');


/*
HTMLCollection vs NodeList
Cada uma com seus métodos e propriedades. 
NodeList retornada com querySelectorAll é estática
*/


const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');
titulo.classList.add('grid-section');

console.log(gridSectionHTML); // 4 itens => htmlCollection
console.log(gridSectionNode); // 3 iten => nodeList


/*

Array-Like
HTMLCollection e NodeList são array-like, parecem uma array mas
não são. O método de Array forEach() por exemplo, existe
apenas em NodeList.

É possível transformar array-like em uma Array real => 
Array.from(gridSection)

*/

gridSectionNode.forEach(function(item,index){
    console.log(item);
});

const arrayGrid = Array.from(gridSectionHTML);
arrayGrid.pop();//met array
