/* navegacao por tab */

function initTabNav(){

    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    
    if ( tabMenu.length && tabContent.length){ //if true && true
    
        function activeTab(index){
            tabContent.forEach( (section) => {
                section.classList.remove('ativo');
            })
            tabContent[index].classList.add('ativo');
        }
        
        tabMenu.forEach( (itemMenu, index) => {
            itemMenu.addEventListener( 'click', () => {
                activeTab(index);
            });
        })
    
    }


}

initTabNav();




/* accordion list */

function initAccordion(){

    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo';

    if (accordionList.length){
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }
        
        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion );
        });

    }


}

initAccordion();





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