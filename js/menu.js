//creacion de funcion auto enfocadapara prteger las variables, y que no se mezcle con otros archivos.
//selecionamos el icono hamburguesa
(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');//la constante menu es igual a..
    const closeMenu = document.querySelector('.nav__close');

//quiero que cuando lo den click a al icono de desplegaje se le agregue la propiedad nav link show que es una propiedad que establecimos en el CSS.

openButton.addEventListener('click', ()=>{
    menu.classList.add('nav_linkos--show');
    });

    //ademas de eso, quiero que pase que cierre el menu.Entonces si yo cierro el menu quiero remover esa clase navlikshow.
    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav_linkos--show');
    });

})();









