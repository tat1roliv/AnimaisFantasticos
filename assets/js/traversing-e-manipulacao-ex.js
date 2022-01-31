// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const cloneMenu = menu.cloneNode(true);
const copy = document.querySelector('.copy');
copy.appendChild(cloneMenu);




// Selecione o primeiro DT da dl de Faq
const primeiroDt = document.querySelector('.faq-lista dt');
console.log(primeiroDt);


// Selecione o DD referente ao primeiro DT
const primeiroDD = document.querySelector('.faq-lista dd');
console.log(primeiroDD);



// Substitua o conteúdo html de .faq pelo de .animais

const faq = document.querySelector('.faq');
const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML;
