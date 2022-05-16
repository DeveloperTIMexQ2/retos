/* Ejercicio 5
1- Crear funcion para manejar evento clic del boton con clase 'show-btn',
esta debera mostrar/ocultar el contenido de la contraseña que se escriba y
ademas debera cambiar la forma del boton añadiendo y quitando la clase 'hide-btn'

Enlcaces de ayuda
https://developer.mozilla.org/es/docs/Web/API/Element/classList
*/

// Escribe tu codigo aqui
'use strict'

var icono = document.getElementById('icon');

console.log(icono);

icono.addEventListener('click', function(){
    var i = document.querySelector('i');

  if(this.nextElementSibling.type == "password"){
    this.nextElementSibling.type = "text";
    i.classList.remove("hide-btn");
    i.classList.add("fa-eye");
  }else{
    this.nextElementSibling.type = "password";
    i.classList.remove("fa-eye");
    i.classList.add("hide-btn");
  }
});