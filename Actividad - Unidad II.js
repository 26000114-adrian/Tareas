// 1. Pedimos los datos 
var mes = parseInt(prompt("Ingresar el nuemero de tu mes de nacimineto (ej. 5):"));
var dia = parseInt(prompt("Ingresa el dÃ­a de Nacimineto (ej. 11):"));
var signo = ""; // AquÃ­ gaurdarmos el resultado

//2. Calculamos el signo
// Aries: Del 21 de marzo (3) al 20 de abril (4)
if ((mes == 3 && dia >= 21)|| (mes == 4 && dia <= 19)){
  signo = "Aries";
}
// TAURO: 21 de Abril (4) al 20 de Mayo (5)
if ((mes == 4  && dia >= 21)|| mes == 5 && dia <= 21){
  signo = "Tauro";
}
// GÃ©menis: 21 de mayo (5) al 20 de junio (6)
if((mes == 5 && dia >= 21) || mes == 5 && dia <= 20){
  signo = "GÃ©menis";
}
// CÃ¡ncer: 21 de junio (6) al 22 de julio (7)
if ((mes == 6 && dia >= 21) || mes == 7 && dia <= 22){
  signo = "CÃ¡ncer";
}
// Leo: 23 de julio (7) al 23 de agosto (8) 
if ((mes == 7 && dia >= 23) || mes == 8 && dia <= 23){
  signo = "Leo";
}
// Virgo: 24 de agosto (8) al 22 de septiembre (9)
if ((mes == 8 && dia >= 24) || mes == 9 && dia <= 22){
  signo = "Virgo";
}
// Libra: 24 de ocutbre (9) al 22 de noviembre (10) 
if((mes == 9  && dia >= 24) || mes == 10 && dia <= 22){
  signo: "Libra";
}
// Escorpio: 24 de octubre (10) al 22 de noviembre (11)
if((mes == 10 && dia >= 24) || mes == 11 && dia <= 22){
  signo:"Escorpio";
}
 // Sagitario: 23 de noviembre (11) al 21 de diciembre (12)
 if ((mes == 11 & dia >= 23) || mes == 12 && dia <= 21){
  signo: "Sagitario";
 }
 // Capricornio: 22 de diciembre (12) al 20 de enero (1)
 if ((mes == 12 && dia >= 22) || mes == 1 && dia <= 20){
  signo:"Capricornio";
 }
 // Acuario: 21 de enero (1) al 19 de febrero (2)
 if((mes == 1 && dia >= 21) || mes == 2 && dia <= 19){
  signo:"Acuario";
 }
 //Piscis: 20 de febrero (2) al 20 de marzo (3)
 if((mes == 2 && dia >= 20) || mes == 3 && dia <=20){
  signo:"Piscis";
 }
// 3. Mostramos el resultado 
alert("Tu signo zodical es: " + signo);