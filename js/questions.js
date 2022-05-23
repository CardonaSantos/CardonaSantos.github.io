
(function(){
    const titleQuestions = [...document.querySelectorAll('.questions__title')];
    console.log(titleQuestions)

    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions__padding--add'); //Con esto y otro, agregamos otro padding debajo del texto de la spreguntas.
            question.children[0].classList.toggle('questions__arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });
})();

//Será una funcion autoinvocada para proteger las variables de otros archivos.
//le decimos que queremos obtener todas las preguntas que por titulo tienen questions title.
//usamos los 3 puntos para convertirlo en un array y tambien por eso ponemos corchetes
//ahora queremos iterar sobre los elementos obtenidos como array.
//console.log(titleQuestions); con este console log podemos ver en consola del browser como conseguimos el array que queriamo, pero lo mantendremos en cometario
//conseguidas las 3 preguntas queremos iterarlas, por cad apregunta quiero obtener su pregunta indivudual, de todas quiero una a por una.
//alert('ouch, me dio click') con este comantario podemos probar la scrip mandando una alerta, pero la comnataremos por una original.
//con esto decimos que queremos el siguiente elemento hermano, el cual seria nuestro parrafo que contiene la respuesta a las preguntas.El hermano del h3 es el parrafo.
//con esta var calcularemos la altura del elemento.

//si de el elemento answer tiene un higth igual a 0, entonces es porque le quitamos el heigth, y si esto pasa, quiero que la variable hegith ahora tenga el alto minimo para que se muestre con answer.scrollHeigth, esta ultimo nos da el alto monimo para que un elemento se muestre. Y si eso es verdad quiero agregar el heigth  a la propieda asnswer que es el parrafo y quiero agregarle el valor de la variable heigth.
