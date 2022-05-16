/* Ejercicio 4
1- Crear funcion para manejar evento clic del boton start con id 'startTimer'
2- Crear funcion para simular el comportamiento del cronometro
--Nota: Teniendo en cuenta que tenemos milisegundos, segundos, minutos y horas,
  la funcion debe tener en cuenta que si los miliseguntos es igual a 1000 estos deben volver a 0 para iniciar de nuevo e incrementar de 1 en 1 cada vez que los milisegundos llegen a 1000,
  de igual forma con los segundos si son igual a 60 deben volver a 0 y aumentar los minutos de 1 en 1 y asi con los demas valores.
3- Crear funcion para manejar evento clic del boton pause con id 'pauseTimer'
4- Crear funcion para manejar evento clic del boton reset con id 'resetTimer'

Enlcaces de ayuda
https://developer.mozilla.org/es/docs/Web/API/setInterval
*/

// Escribe tu codigo aqui
'use strict'

var start = document.getElementById('startTimer');
var reset = document.getElementById('resetTimer');
var pause = document.getElementById('pauseTimer');

var tiempo = Date.now();
var acumulador = 0;
var verificador = false;

initiar();

function initiar() {
  start.addEventListener('click', startC);
  pause.addEventListener('click', pauseC);
  reset.addEventListener('click', resetC);
}

function startC(){
  verificador = true;
}

function pauseC(){
  verificador = false;
}

function resetC(){
  acumulador = 0;
}

setInterval(() =>{
  var time = document.querySelector('.timerDisplay');
  if(verificador){
    acumulador += Date.now() - tiempo
  }
  tiempo = Date.now();
  time.innerHTML = operaciones(acumulador)
}, 1000/60);

function operaciones(t){
  var mili = t % 1000;
  //contar
  var cont = Math.floor(((t - mili) / 1000));

  var seg = cont%60;
  var minu = Math.floor((cont / 60)  % 60);
  var horas = Math.floor((cont/60 / 60));
  Number.prototype.c = function(n) {
    return (this + "").padStart(n,0)
  }
  return horas.c(2) + ":" + minu.c(2) + ":" + seg.c(2) + "." + mili.c(3);
}
