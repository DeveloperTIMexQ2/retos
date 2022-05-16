/* Ejercicio 3
1- Crear funcion para mostrar la hora actual y se actualice cada segundo

Enlcaces de ayuda
https://developer.mozilla.org/es/docs/Web/API/setInterval
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
*/

// Escribe tu codigo aqui
var mostrar = document.getElementById('digital-clock');

setInterval(()=>{
    var hora = new Date();
    mostrar. innerHTML = hora.toLocaleTimeString();
}, 1000);