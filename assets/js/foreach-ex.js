// Mostre no console cada parágrado do site
const paragrafosSite = document.querySelectorAll('p');
paragrafosSite.forEach((element) => console.log(element));

// Mostre o texto dos parágrafos no console
paragrafosSite.forEach((element) => console.log(element.innerText));

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');
imgs.forEach((item, index) => {
 console.log(item, index);
});

let i = 0;
imgs.forEach( () => {
 console.log(i++)
});

imgs.forEach(() => i++);
