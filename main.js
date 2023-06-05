// probando linkeo
console.log("me escuchan?")



let nombre = prompt("Hola!!!! ¿cómo te llamas?" )


// Utilizamos if-else para deterinar si el usuario esta interesado en el servicio a prestar
let intencion= prompt ("hola"+ " " + nombre + " " + "¿quieres pescar en stardew valley? s/n")
while (intencion != "s", "n") {
    let intencion= prompt ("hola"+ " " + nombre + " " + "¿quieres pescar en stardew valley? s/n")


if (intencion == "s") {

 
 // utilizamos switch para determinar qué hacer en cada estación
 let estacion = prompt("¿en qué estación te encuentras?" + " primavera/verano/otoño/invierno" ) 
 while (estacion != "primavera","verano","otoño","invierno") {
    let estacion = prompt("¿en qué estación te encuentras?" + " primavera/verano/otoño/invierno" ) 
    
 switch (estacion) {

    case "primavera":

        // usamos if else para indicar que hacer
        let clima = prompt( "¿Está lloviendo? s/n")
        if (clima == "s") {
           alert (" Deberías pescar en el río ")  
           }
           else if (clima == "n") {
               alert (" Deberías pescar en el lago de la montaña ")
           }
           else {
               alert ("por favor " + nombre + " , ingresa s/n") 
           }



    break;

    case "verano":  

        // usamos if else para indicar que hacer
        let climav = prompt( "¿Está lloviendo? s/n")
        if (climav == "s") {
           alert (" Deberías pescar en el estanque del bosque secreto ")  
           }
           else if (climav == "n") {
               alert (" Deberías pescar en el océano ")
           }
           else {
               alert ("por favor " + nombre + " , ingresa s/n") 
           }


    break;

    case "otoño":
    //  en otoño se pesca en el rio           
           alert (" deberías pescar en el río ")  
    
     break;

    case "invierno":
    // no hay otra opción
           alert (" deberías pescar en el océano ")  
          


    break;

    default:
        alert ("eso no es una estación")
        }
    break;
    }


}
else if (intencion == "n") {
    alert (" pues deberías")
break;
}
}




