// Variable par controlar si el juego se repito
var juagar = "SI"; 
// BLOQUE 1: El ciclo pricipal del juego
//Todo lo que este dentro de esre while se repetira  si el usuraio dice SI 
while(jugar == "SI") {

     // 1. La Computadora elige su nÃºmero (oculto)
     // Genera un nÃºmero aleatorio entre 1 y 9
     var numeroCompu = Math.floor(Math.random() * 9) + 1;
     
   // 2. pedir nÃºmero al usuraio con VALIDACIÃ“N
   var numeroUsuario = 0;

   // Usamos do-while: "Hacer esto... mientras el dato sea invÃ¡lido"
   do{
    var entrada = prompt("Ingresar un nÃºmero entre 3 y 6 (Rango permitido 1-9):");
    alert("Error: Debes Ingresar un numero valido entre 1 y 9.")
    
   // Si no es un nÃºmero 0 es menor a 1 0 es mayor a 9...
   if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 9) {
    alert("Error: Debes Ingresar un nÃºmero vÃ¡lido entre 1 y 9.");
   }

 //se repite si el nÃºmero NO es vÃ¡lido (<1 o >9)
} while (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 9);
// 3. Pedir la predicciÃ³n (Mayoyor, Menor o Ingual)
var predecion = prompt("Tu nÃºnmero es " + numeroUsuario + ".Â¿Crees que es MAYOR o IGUAL al de la Computadora?").toUpperCase();
//.toUpperCase() convierte lo que escriban a mayÃºsculas para facilitar comparar 

//4. LÃ³gica del Ganador 
var resultado = "";
var mensajeFinal = "";

// 5. Comparamos la realidad con que dijo el usario 
if (prediccion == resultado) {
   mensajeFinal ="Â¡ Ha adivinado!";
}else {
  mensajeFinal = "Fallasre.";
}

// 6. Mostrar resultados
    alert("La computadora eligiÃ³ " + numeroCompu + ", usted eligiÃ³ " + numeroUsuario + ".\n" +
          "Su elecciÃ³n es " + resultado + ".\n" + 
          mensajeFinal);

    // 7. Preguntar si quiere jugar otra vez
    jugar = prompt("Â¿Quieres jugar otra vez? (Escribe SI o NO)").toUpperCase();
}
// BLOQUE FINAL: Se ejecuta cuando el ciclo termina (usuario dice NO)
alert("Gracias por jugar.\nNombre: Adrian Torres\nCarnet: [26000114]");