"use strict"; // Sirve para dar mensajes de error y asi encontrarlos antes.

function conversor (){

  // Cogemos el valor del imput y lo guardamos.
  var ini_temp = document.getElementsByName("ini_temp")[0].value;

  // Expresion regular que vamos a usar.
  var exp_regular = /(?:)(\d+)([cCfF]*)/;

  // Filtramos en la variable con la expresion regular.
  var value = ini_temp.match(exp_regular);

  if(value != null) alert(value);

};
