// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelector('.menu');
menu.classList.add('ativo');

// Remove a classe ativo de todos os itens do menu e mantenha ape
menu.classList.remove('ativo');

// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll('img');
const imagensArray = Array.from(imagens);


imagensArray.forEach((element) => {
    if (element.hasAttribute('alt')){
        console.log(element + "possui 'alt'");
    } else {
        console.log(element + "não possui 'alt'");
    }
   });


function verificaAlt(elemento){
    const elementoArray = Array.from(elemento);
    for (let i = 0; i < elementoArray.length; i++){
        if (elementoArray[i].hasAttribute('alt')){
            console.log(elementoArray[i] + "possui 'alt'");
        } else {
            console.log(elementoArray[i] + "não possui 'alt'");
        }
    }
}

console.log(verificaAlt(imagens));


// Modifique o href do link externo no menu
let linkExtMenu = document.querySelectorAll('[href^="http"]');
linkExtMenu = "#linkalternativo";
console.log(linkExtMenu);
