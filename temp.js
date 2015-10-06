"use strict"; // Sirve para dar mensajes de error y asi encontrarlos antes.

function conversor (){

  // Cogemos el valor del imput y lo guardamos.
  var ini_temp = document.getElementsByName("ini_temp")[0].value;

  /* Expresion regular que acepta una cadena que empiece por un numero con el signo como manera opcional
  asi como si este es decimal. Con el primer parentesis recojo el valor de la temperatura y con el segundo
  el tipo de temperatura que es. */
  var exp_regular = /(^[-+]?\d+(?:\.\d*)?)([fFcC])/;

  // Filtramos en la variable con la expresion regular.
  var value = ini_temp.match(exp_regular);

  if(value != null){

  } else {
    alert("El valor '" + ini_temp + "' no es correcto. Lea las instrucciones.");
  }

};
