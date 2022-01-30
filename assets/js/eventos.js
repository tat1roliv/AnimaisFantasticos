
/*
addEventListener
*/

const img = document.querySelector('img');
// elemento.addEventListener(event, callback, options***)
img.addEventListener('click', function() {
 console.log('Clicou');
})




/*
callback
boa prática separar a função de callback do addEventListener,
*/
const img2 = document.querySelector('img');
function callback() {
 console.log('Clicou');
}
img2.addEventListener('click', callback); // sintaxe correta
//img.addEventListener('click', callback()); // undefined




/*
event
*/
const img3 = document.querySelector('img');
function callback(event) {
 console.log(event);
}
img3.addEventListener('click', callback);




/*
event props
*/
const imgsLista = document.querySelector('.animais-lista');

function exeCallback(e) {
 const currentTarget = e.currentTarget; // this
 const target = e.target; // onde o clique ocorreu
 const type = e.type; 
 const path = e.path;
 console.log(currentTarget, target, type, path);
}

imgsLista.addEventListener('click', exeCallback);





/*
preventDefault
previne comportamento padrao do browser
*/
const link = document.querySelector('a[href^="http"]');
function handleLink(event) {
 event.preventDefault();
 console.log(event.currentTarget.href);
}
link.addEventListener('click', handleLink);



/*
this
No caso de eventos, fará referência ao elemento em que addEventListener foi adicionado.
*/
const _img = document.querySelector('img');
function callbackSRC(event) {
 console.log(this); // currentTarget
 console.log(this.getAttribute('src'));
}
_img.addEventListener('click', callbackSRC);





/*
click , 
scroll , 
resize ,
keydown , 
keyup , 
mouseenter ,
...
https://developer.mozilla.org/en-US/docs/Web/Events
*/

const h1 = document.querySelector('h1');
function callback(event) {
 console.log(event.type, event);
}
h1.addEventListener('click', callback);
h1.addEventListener('mouseenter', callback);
window.addEventListener('scroll', callback);
window.addEventListener('resize', callback);
window.addEventListener('keydown', callback);


/*
Keyboard
facilitar a navegação no site
*/

function handleKeyboard(event) {
    if(event.key === 'a')
    document.body.classList.toggle('azul');
    else if(event.key === 'v')
    document.body.classList.toggle('vermelho');
   }
   window.addEventListener('keydown', callback);





/*
forEach e eventos
O método addEventListener é adicionado à um único elemento, então é necessário um loop entre elementos de uma lista, para adicionarmos à cada um deles.
*/

const imgsAll = document.querySelectorAll('img');

function imgSrc(event) {
 const src = event.currentTarget.getAttribute('src');//this
 console.log(src);
}

imgsAll.forEach((img) => {
 img.addEventListener('click', imgSrc);
});

   