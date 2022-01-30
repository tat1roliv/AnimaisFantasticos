// Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. Previna  o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]')

function classeAtivo(event){

    event.preventDefault();

    linksInternos.forEach( (link) => {
        link.classList.remove('ativo');
    })
   
    event.currentTarget.classList.add('ativo');
            
}

linksInternos.forEach( (link) => {
    link.addEventListener('click', classeAtivo);
})




// Selecione todos os elementos do site começando a partir do body,  ao clique mostre exatamente quais elementos estão sendo clicados
/*
const elementosSite = document.querySelectorAll('body *');

function exibeElemento(e){
    const currentTarget = e.currentTarget; // this
    console.log(currentTarget);
}

elementosSite.forEach( (elemento) => {
    elemento.addEventListener('click', exibeElemento);
})
*/


// Utilizando o código anterior, ao invés de mostrar no console, remova o elemento que está sendo clicado
const elementosSite = document.querySelectorAll('body *');

function removeElemento(e){
    e.currentTarget.remove(); 
}

elementosSite.forEach( (elemento) => {
    elemento.addEventListener('click', removeElemento);
})




// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function handleKeyboard(e) {
    if(e.key === 't'){
        document.body.classList.toggle('texto-maior');
    }
    
   }
   window.addEventListener('keydown', handleKeyboard);