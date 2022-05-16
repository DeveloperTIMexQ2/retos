/* Ejercicio 1
1- Crear funcion para manejar evento clic del boton + con clase 'counter-plus'
2- Crear funcion para manejar evento clic del boton + con clase 'counter-minus'
3- Actualizar el div con clase 'counter-display' cada vez que se hace clic en alguno de los botones

Enlaces de ayuda
https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener
https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML
*/

// Escribe tu codigo aqui
'use strict'

var btnMin = document.querySelector('.counter-minus');
var btnPlus = document.querySelector('.counter-plus');

var counterDis = document.querySelector('.counter-display');


btnMin.addEventListener('click', () => {
	document.querySelector('.counter-display').innerHTML = "-";
});

btnPlus.addEventListener('click', () => {
	document.querySelector('.counter-display').innerHTML = "+";
});
