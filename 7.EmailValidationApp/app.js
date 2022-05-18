/* Ejercicio 7
1- Dentro de la funcion checker validar mediante una expresion regular el email ingresado
  -Si cumple con la validacion se debera mostrar un icono de exito '<i class="fas fa-check-circle"></i>' en color '#2ecc71', un borde(2px solid #2ecc71) y no mostrar el mensaje de error
  -Si lo que se ingreso esta vacio o se borro el contendio, el input debera de mostrarse con su forma normal, no se debe mostrar ningun icono, ni mensaje de error y mostrar el borde normal(2px solid #d1d3d4)
  -En caso de error se debera mostrar el icono de error '<i class="fas fa-exclamation-circle"></i>' en color '#ff2851', un borde('2px solid #ff2851') y errorMsg se debera mostrar

Enlcaces de ayuda
https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML
https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleRule/style
*/

let emailId = document.getElementById("email-id");
let errorMsg = document.getElementById("error-msg");
let icon = document.getElementById("icon");
let i1 = document.querySelector(".i1");
let i2 = document.querySelector(".i2");
let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/; //Expresion regular a evaluar

function checker() {
  icon.style.display = "inline-block";
  // Escribe tu codigo aqui
 if(emailId.value.match(mailRegex)){
    i1.style.display="block";
    i1.style.color = "#2ecc71"
    emailId.style.border = "2px solid #2ecc71";
    i2.style.display="none";
    errorMsg.style.display = "none";
 }else{
    i1.style.display="none";
    i2.style.display="block";
    i2.style.color = "#ff2851";
    emailId.style.border = "2px solid #ff2851";
    errorMsg.style.display = "block";
   }

  if(emailId.value==""){
    i1.style.display="none";
    i2.style.display="none";
    errorMsg.style.display = "none";
    emailId.style.border =  "2px solid #d1d3d4";
  }
}