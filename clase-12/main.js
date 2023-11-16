//Operador ++
// let contador = 0
// contador = contador + 1
// contador =+ 1
// contador ++

//Operador Ternario
//let numero = parseInt(prompt("ingrese un numero"))
// if(numero>10) {
//     console.log("El numero es mayor a 10")
// } else {
//     console.log("El numero es menor a 10")
// }

//condicion ? opcion1 : opcion2
//numero>10 ? console.log("El numero es mayor a 10") : console.log("El numero es menor a 10")

//let entregaFinal = parseInt(prompt("Ingrese la nota del proyecto final"))
//let certificado
// if(entregaFinal>=7) {
//     certificado=true
// } else {
//     certificado=false
// }

// if(certificado) {
//     console.log("Podes descargar el certificado")
// } else {
//     console.log("A recursar")
// }

// let certificado = (entregaFinal>=7) ? true : false
// certificado ? console.log("Podes descargar el certificado") : console.log("A recursar")

//Operador and &&
// const personas = [
//     {
//         nombre: "Jose",
//         edad:30
//     },
//     {
//         nombre: "Maria",
//         edad: 35
//     }
// ]
// const productos = []
// if(personas.length >0) {
//     console.log("Tenes integrantes en tu equipo")
// }
// productos.length === 0 && console.log("Carrito vacio")

//Operador OR ||

//let cart
// let cartLS = JSON.parse(localStorage.getItem("cart"))

// if(cartLS) {
//     cart=cartLS
// } else {
//     cart = []
// }

// let cart = JSON.parse(localStorage.getItem("cart")) || []

//Acceso condicional a un objeto ?

// const messi = {
//     nombre: "Lionel Andres",
//     apellido: "Messi",
//     titulos: {
//         seleccion: 3,
//         clubesEuropa: 50,
//     }
// }


// console.log(messi?.titulos?.ligaArgentina || "no hay registro")

//Desestructuracion
const messi = {
    nombre: "Lionel Andres",
    apellido: "Messi",
    titulos: {
        seleccion: 3,
        clubesEuropa: 50,
    }
}

// let nombre = messi.nombre
// let apellido = messi.apellido

// console.log(nombre)
// console.log(apellido)

// let {nombre, apellido, titulos: {seleccion, clubesEuropa}} = messi
// console.log(nombre, apellido, seleccion, clubesEuropa)

//Alias
// let {nombre:name, apellido:lastName} = messi
// console.log(name, lastName)

// const destructuring = ({nombre, apellido, titulos: {seleccion, clubesEuropa}}) => { //(jugador)
//     // let {nombre, apellido, titulos: {seleccion, clubesEuropa}} = jugador
//     console.log(nombre, apellido, seleccion, clubesEuropa)
// }
// destructuring(messi)

//Array

const scaloneta = ["messi", "scaloni","dibu","lautaro"]
let [,,c,d] = scaloneta
console.log(c,d)