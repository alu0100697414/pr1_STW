"use strict"; // Sirve para dar mensajes de error y asi encontrarlos antes.

function conversor (){

  // Cogemos el valor del imput y lo guardamos.
  var ini_temp = document.getElementsByName("ini_temp")[0].value;

  /* Expresion regular que acepta una cadena que empiece por un numero con el signo como manera opcional
  asi como si este es decimal. Con el primer parentesis recojo el valor de la temperatura y con el segundo
  el tipo de temperatura que es. */
  var exp_regular = /(^[-+]?\d+(?:\.\d*)?)([fFcC])/;

  // Filtramos en la variable con la expresion regular.
  var valor = ini_temp.match(exp_regular);

  if(valor != null){

    var numero = valor[1];
    numero = parseFloat(numero); // Pasamos el numero de string a flotante

    var tipo = valor[2];

    if(tipo === 'c' || tipo === 'C'){
      // Pasamos de C a F
      var res = ((numero*9)/5)+32;
      res = Math.round(res*100)/100; // Redondeamos a dos decimales
      res = "El resultado es: " + String(res) + " F";
    } else {
      // Pasamos de F a C
      var res = ((numero-32)*5)/9;
      res = Math.round(res*100)/100; // Redondeamos a dos decimales
      res = "El resultado es: " + String(res) + " C";
    }

    resultado.innerHTML = res;

  } else {
    resultado.innerHTML = "El valor '" + ini_temp + "' no es correcto. Lea las instrucciones.";
  }

};
