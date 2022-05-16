/* Ejercicio 2
1- Crear funcion para manejar evento clic del boton add con id 'push'
2- Validar que e input tenga al menos una letra y si no es asi enviar una alerta
3- Si el input es valido, añadir la tarea dentro del div con id 'tasks'
<div class="task">
  <span id="taskname">
    ${document.querySelector('#newtask input').value}
  </span>
  <button class="delete">
    <i class="far fa-trash-alt"></i>
  </button>
</div>
4- Crear funcion para manejar el evento clic de los botones de eliminar tarea

Enlaces de ayuda
https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener
https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML
*/

// Escribe tu codigo aqui
'use strict'
var btnPush = document.getElementById('push');
var text = document.getElementById('text');
var btnDelete = document.querySelector('.delete');


btnPush.addEventListener('click', () =>{
	if(text.value.length < 1){
		alert("No haz escrito nada");
	}else{
		var inputValue = document.getElementById('text').value;
		document.getElementById('taskname').innerHTML = inputValue;
	}
});

btnDelete.addEventListener('click', () =>{
	var tasks = document.getElementById('tasks');
	var taskname = document.getElementById('taskname');
	tasks.removeChild(taskname);
});
