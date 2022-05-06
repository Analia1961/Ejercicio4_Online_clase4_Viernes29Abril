// EJERCICIO 4 - Determinar Medalla - Clase4 viernes 29 abril

/* EJERCICIO EN LÍNEA
rotulo.innerHTML = "Ingrese su posicion en la carrera:";
*/

/* •Desarrolle un algoritmo que, dada una posición en
una carrera se determine el tipo de medalla a entregar.
•Tenga en cuenta que para el primer puesto se entrega medalla de oro, 
segundo puesto medalla de plata y tercer puesto medalla de bronce. 
En caso que quede en otra posición se entrega certificado de participación. 
*/

let dato1 = document.getElementById("dato1");

let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");

rotulo1.innerHTML = " Ingrese la posición de llegada del competidor:";

btnEnviar.addEventListener("click", () => {
  let numeroIngresado: number = Number(dato1.value);

  // ESTE PEDAZO DE CODIGO ES IGUAL AL DE ABAJO PERO CON SWITCH PODEMOS OPTIMIZAR MÁS
  /* if (numeroIngresado == 1) {
    console.log("Felicitaciones! Ganó medalla de ORO");
  } else if (numeroIngresado == 2) {
    console.log("Felicitaciones! Ganó medalla de PLATA");
  } else if (numeroIngresado == 3) {
    console.log("¡Felicitaciones! Ganó medalla de BRONCE");
  } else {
    console.log("¡Felicitaciones! Recibe certificado de participación");
  }
 */

  switch (numeroIngresado) {
    case 1:
      console.log("¡Felicitaciones! Ganó medalla de ORO");
      break;
    case 2:
      console.log("¡Felicitaciones! Ganó medalla de PLATA");
      break;
    case 3:
      console.log("¡Felicitaciones! Ganó medalla de BRONCE");
      break;
    default:
      console.log("¡Felicitaciones! Recibe certificado de participación");
  }
});
