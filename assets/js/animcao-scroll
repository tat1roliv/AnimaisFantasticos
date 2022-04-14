


/* scroll suave */
/*chrome + firefox*/

function initScrollSuave(){

    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"');

    function scrollToSection(e){
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
    
       // const sectionTop = section.offsetTop;
       // window.scrollTo(0, sectionTop);
    
       section.scrollIntoView({
           behavior: 'smooth',
           block: 'start',
       });
    
    }
    
    linksInternos.forEach((element) => {
        element.addEventListener('click', scrollToSection);
    });

}

initScrollSuave();





/* scroll animation */

const sections = document.querySelectorAll('.js-scroll');

function initAnimacaoScroll(){

    if (sections.length){

        const windowMetade =  window.innerHeight * 0.6;
    
        function animaScroll(){
            sections.forEach( (section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade ) < 0;
        
                if (isSectionVisible){
                    section.classList.add('ativa');
                } else {
                    section.classList.remove('ativa');
                }
            })
        }
        
        animaScroll();
        
        window.addEventListener('scroll', animaScroll);
    }
    

}

initAnimacaoScroll();