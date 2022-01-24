// Retorne no console todas as imagens do site
const imgSite = document.querySelectorAll('img');
console.log(imgSite);

// Retorne no console apenas as imagens que começaram com 'imagem'
const imagens = document.querySelectorAll("img[src^='assets/img/imagem']");
console.log(imagens);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(primeiroH2);

// Selecione o último p do site
const paragrafosSite = document.querySelectorAll('p');
console.log(paragrafosSite[paragrafosSite.length - 1]);