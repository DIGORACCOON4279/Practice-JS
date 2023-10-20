function validarRta(texto, textoValidar) {
    //.toLowerCase() pasa un texto a miniscula
    if (texto.toLowerCase() == textoValidar) { //no == no
        return true
    }
    //Si el if es verdadero, devuelve true. Si es false (o sea, el texto no es igual), devuelvo Flase
    return false
}

let sigue = "si"//sigue = Si, SI, sI, si

do {
    //Primero declara la variable numero y luego le asigno el valor
    let numero
    //Ciclo para que solo me ingresen numeros validos
    do {
        //Variable que sea crea dentro de una funcion o un ciclo es de ambito local (variable local)
        numero = parseFloat(prompt("Ingrese un numero para verlo al cuadrado"))
        if (isNaN(numero) == true) {
            alert("Solo se permiten numeros validos")
        }
    } while (isNaN(numero) == true) //Si me ingresa un numero, numero no es NaN. Si me ingresa cualquier cosa, numero es NaN
    //isNaN() devuelve verdadero si el numero ingresado es NaN, falso si no lo es

    alert(numero ** 2) //** es potencia en js

    let rta = prompt("¿Desea ingresar otro numero")

    if (validarRta(rta, "no") == true) {
        sigue = "no"
    }


} while (sigue == "si")
