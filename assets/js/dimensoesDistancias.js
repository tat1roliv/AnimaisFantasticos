/*
width + height =>  propriedades e métodos dos objetos Element e HTMLElement
*/

const section = document.querySelector('.animais');
section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.offsetTop; 
section.offsetLeft; 
section.scrollHeight; // height total, mesmo dentro de scroll



/*
metodo getBoundingClientRect
*/
const section = document.querySelector('.animais');
const rect = section.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll


/*
window
*/
window.innerWidth; // width do janela
window.innerHeight; // height do janela


window.outerWidth; // soma dev tools também
window.outerWidth; // soma a barra de endereço
window.pageYOffset; // distância total do scroll horizontal
window.pageXOffset; // distância total do scroll vertical

if(window.innerWidth < 600) {
 console.log('Tela menor que 600px');
}


/* matchMedia */
const small = window.matchMedia('(max-width: 600px)').matches;

if(small) {
 console.log('mobile')
} else {
 console.log('tablet/desktop')
}
