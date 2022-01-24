const imgs = document.querySelectorAll('img');
imgs.forEach(function(elemento, index, array){
 console.log(elemento); // o item atual no loop
 console.log(index); // o número do index
 console.log(array); // a Array completa
})

/*
forEach é um método de Array, alguns objetos array-like possuem
este método. Caso não possua, o ideal é transformá-los em uma
array.
*/

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);
titulosArray.forEach(function(item){
 console.log(item);
});

/* arrow function */
const imagens = document.querySelectorAll('img');
imagens.forEach((element) => {
 console.log(element);
});

// sem argumentos precisa dos parênteses, mesmo vazio
let i = 0;
imagens.forEach(() => {
 console.log(i++);
});
//imagens.forEach(() => console.log(i++));
