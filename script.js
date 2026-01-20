//BOTONES
const botonA1= document.querySelector("#btnA1");
const botonA2= document.querySelector("#btnA2");
const botonA3= document.querySelector("#btnA3");
const botonA4= document.querySelector("#btnA4");

//MENSAJES
const mensajeA1= document.querySelector("#a1");
const mensajeA2= document.querySelector("#a2");
const mensajeA3= document.querySelector("#a3");
const mensajeA4= document.querySelector("#a4");

//EVENTOS

//boton A1
botonA1.addEventListener("click", function(event){
    let precio= 10, cantidad= 5, total;

    total= precio*cantidad;

    mensajeA1.innerHTML= "Antes:<br>Precio: " + precio + "<br>Cantidad: " + cantidad + "<br>Total: " + total + "<br>";

    cantidad++;

    total= precio*cantidad;

    mensajeA1.innerHTML += "<br>Despues: <br>Precio: " + precio + "<br>Cantidad: " + cantidad + "<br>Total: " + total + "<br>";

});

//boton A2
botonA2.addEventListener("click", function(event){
    let edad= 20, carnet= false, mayor= false;

    if(edad >=18) {
        carnet= true;
        mayor= true;

    } else {
        carnet= false;
        mayor= false;
    }

    mensajeA2.innerHTML= "Edad: " + edad + "<br>Mayor de edad: " + mayor + "<br>Carnet: " + carnet + "<br>";

    if(carnet) {
        mensajeA2.innerHTML+= "Si puede conducir";

    } else {
        mensajeA2.innerHTML+= "No puede conducir";
    }

});

//boton A3
botonA3.addEventListener("click", function(event){



});

//boton A4
botonA4.addEventListener("click", function(event){



});