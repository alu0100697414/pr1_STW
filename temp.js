<<<<<<< HEAD
"use strict";function conversor(){var e=document.getElementsByName("ini_temp")[0].value,r=/(^[-+]?\d+(?:\.\d*)?)([fFcC])/,a=e.match(r);if(null!=a){var t=a[1];t=parseFloat(t);var n=a[2];if("c"===n||"C"===n){var s=9*t/5+32;s=Math.round(100*s)/100,s="El resultado es: "+String(s)+" F"}else{var s=5*(t-32)/9;s=Math.round(100*s)/100,s="El resultado es: "+String(s)+" C"}resultado.innerHTML=s}else resultado.innerHTML="El valor '"+e+"' no es correcto. Lea las instrucciones."}
=======
"use strict"; // Sirve para dar mensajes de error y asi encontrarlos antes.

function conversor (){

  // Cogemos el valor del imput y lo guardamos.
  var ini_temp = document.getElementsByName("ini_temp")[0].value;

  /* Expresion regular que acepta una cadena que empiece por un numero con el signo como manera opcional
  asi como si este es decimal. Con el primer parentesis recojo el valor de la temperatura y con el segundo
  el tipo de temperatura que es. */
  //var exp_regular = /(^[-+]?\d+(?:\.\d*)?)([fFcC])/;
  var exp_regular_uno = /(^[-+]?\d+(?:\.\d*)?)(?:[eE]?([-+]?\d+))?\s*([fFcC])/;

  // Filtramos en la variable con la expresion regular.
  var valor = ini_temp.match(exp_regular_uno);
alert(valor);
  if(valor != null){

    var numero = valor[1];
    numero = parseFloat(numero); // Pasamos el numero de string a flotante

    if (valor[2] !== undefined){
      var exp = valor[2];
      exp = parseInt(exp); // Pasamos el numero de string a entero

      if (exp<0){
        exp = -exp; // Pasamos el valor a positivo
        var i = 1, div = 10;

        while(i < exp){
          div = div * 10;
          i++; // Vemos por cuanto debemos dividirlo
        }

        if(div !== 0) numero = numero/div;

      } else {
        var i = 1, div = 10;

        while(i < exp){
          div = div * 10;
          i++; // Vemos por cuanto debemos multiplicarlo
        }
        if(div !== 0) numero = numero*div; // Si es distinto de 0 multiplicamos
      }

      alert(numero);
    }

    var tipo = valor[3];

    if(tipo === 'c' || tipo === 'C'){
      // Pasamos de C a F
      var res = ((numero*9)/5)+32;
      res = "El resultado es: " + String(res) + " F";
    } else {
      // Pasamos de F a C
      var res = ((numero-32)*5)/9;
      res = "El resultado es: " + String(res) + " C";
    }

    resultado.innerHTML = res;  // Mostramos el resultado en el HTML

  } else {
    resultado.innerHTML = "El valor '" + ini_temp + "' no es correcto. Lea las instrucciones.";
  }

};
>>>>>>> master
