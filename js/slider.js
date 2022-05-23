(function(){
    const sliders=[...document.querySelectorAll('.testimony__body')]; //le decimos que queremos agregrlo a todos los elementos que son slider, las seciones clas testimony__body.
    const buttonNext = document.querySelector('#next');//con queryselector le decimos en su parametros que queremos leseccinar los elementos que tentan el ID next DEL HTML.
    const buttonBefore= document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', () =>{
        changePosition(1);
    });
//si presionamos hacia delante nos dará uno, sino menos uno
    buttonBefore.addEventListener('click', () =>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTestimony=document.querySelector('.testimony__body--show').dataset.id;
        value=Number(currentTestimony);
        value+=add;
//si precionamos la flecha nos dira que es 2, si presinamos el botton de retroseso nos dirá que es 0, si volvemos a presionar el de ir hacia delante nos suma 1, si presionamos el boton de regreso nos resta uno.Esto lo podemos ver si usamos console.log durate el proceso.
        sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');
        if(value=== sliders.length+1 || value===0){
            value= value=== 0 ? sliders.length : 1;
        }
        sliders[value-1].classList.add('testimony__body--show'); //si tenemos 3 elementos comenzamos a contar desde el cero, si estoy seleccionando al elemento no 2 en realidad es el elemento no1.

    }

    //con buttonNext haremos que cada que alguien le de click al botton, se ejecute una funcion con la funcion flecha.

})();//esta es una funcion que se llama a sí misma para no meszlcarla con todos los demás archios que vamos a crear