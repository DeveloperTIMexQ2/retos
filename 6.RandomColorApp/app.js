/* Ejercicio 6
1- Crear funcion para manejar evento clic del boton Generate con id 'gen-btn',
esta debera generar un string aleatoria con el color en exadecimal, ejemplo #00ff00 y
ademas debera quitar y añadir la clase 'show-color' para generar una animacion cada vez que se cambia de color,
el color se debera mostrar en el div con id 'output-color' y el color exadecimal en el input con id 'output'
2- Opcional - Crear funcion para copiar el color exadecimal al portapapeles
'''
Caracteres permitidos en un codigo exadecimal "0123456789abcdef"
Funcion de ayuda para generar el color: Math.floor(Math.random() * 16)
'''

Enlcaces de ayuda
https://developer.mozilla.org/es/docs/Web/API/Element/classList
*/

// Escribe tu codigo aqui
var btnG = document.getElementById('gen-btn');
var sp = document.getElementById('span-color');
var btnC = document.getElementById('copy-btn');
var input = document.getElementById('output');

function generar(){
    var random = Math.floor(Math.random() * 0xffffff * 1000000).toString(16);
    return document.getElementById('output').value = `#${random.slice(0,6)}`;
}

btnG.addEventListener('click', function(){
    sp.classList.add('show-color');
    generar();
    var colorHexa = document.getElementById('output').value;
    document.getElementById('output-color').style.background = colorHexa;
});

btnC.addEventListener('click', function(){

    input.focus();
    
    document.execCommand('selectAll');
    document.execCommand('copy');

});