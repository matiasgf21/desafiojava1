precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio




const cantidad = () =>{

    let numero = document.querySelector(".cantidad");

    //console.log(numero.innerHTML, "<---contenido del tag");

    let contenido = Number(numero.innerHTML);
   // console.log(typeof contenido,"<---tipo de dato");

    contenido = contenido + 1;
    //console.log(contenido, "<---- soy la suma de la cantidad");

    numero.innerHTML = contenido;
};



const cantidadmenos = () =>{

    let numerodos = document.querySelector(".cantidad");

    //console.log(numero.innerHTML, "<---contenido del tag");

    let contenidomenos = Number(numerodos.innerHTML);
   // console.log(typeof contenido,"<---tipo de dato");

    contenidomenos = contenidomenos - 1;
    //console.log(contenidomenos, "<---- soy la resta de la cantidad");

    numerodos.innerHTML = contenidomenos;
};




const suma = () =>{

    let multiplica = document.querySelector(".valor-total");

    //console.log(numero.innerHTML, "<---contenido del tag");

    let contenidomulti = Number(multiplica.innerHTML);
   //console.log(typeof contenidomulti,"<---tipo de dato");

   contenidomulti = contenidomulti+400000;
  
    //console.log(contenidomulti, "<---- soy la suma de la cantidad con el valor correspondiente");

    multiplica.innerHTML = contenidomulti;
};



const resta = () =>{

    let resta = document.querySelector(".valor-total");

    //console.log(numero.innerHTML, "<---contenido del tag");

    let contenidoresta = Number(resta.innerHTML);
   //console.log(typeof contenidomulti,"<---tipo de dato");

   contenidoresta = contenidoresta-400000;
  
    //console.log(contenidoresta, "<---- soy la resta con el precio correcto");

    resta.innerHTML = contenidoresta;
};
