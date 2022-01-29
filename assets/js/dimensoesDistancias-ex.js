// Verifique a distância da primeira imagem em relação ao topo da página
const img1Top = document.querySelector('.animais-lista li:first-child').offsetTop;
console.log(img1Top);

// Retorne a soma da largura de todas as imagens
 function totalLarguraImagens(){
    const imagens = document.querySelectorAll('img');
    let totalLargura = 0;

    imagens.forEach((imagem) => {
        totalLargura = totalLargura + imagem.offsetWidth; 
    });

    console.log(totalLargura);
 }

window.onload = function(){
    totalLarguraImagens();
}


// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;

    if (linkWidth >= 48 && linkHeight >= 48){
        console.log(link, 'acessibilidade ok');
    } else {
        console.log(link, 'falha acessibilidade');
    }
})

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu
const mobile = window.matchMedia('(max-width: 720px)').matches;

const menu = document.querySelector('.menu');

if(mobile) {
 menu.classList.add('menu-mobile');
} 
