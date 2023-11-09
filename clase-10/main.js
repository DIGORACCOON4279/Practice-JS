// let evento = document.getElementById("h1")

// // evento.addEventListener("click", clickTest)
// // function clickTest () {
// //     console.log("testde click")
// // }
// let clicks = 0
// evento.onclick = () => {
//     clicks ++
//     console.log("cantidad de clicks ", clicks)
// }

// let input = document.getElementById("input")
// input.onkeyup = () => {
//     console.log("apretaste una tecla")
// }

// let counter = document.getElementById("counter")
// let sumar = document.getElementById("plus-button")
// let restar = document.getElementById("minus-button")
// let contador = 0
// sumar.onclick = () => {
//     contador ++
//     counter.innerHTML = contador
//     restar.disabled = false
// }

// restar.onclick = () => {
//     if(contador === 0) {
//         restar.disabled = true
//     } else {
//         contador --
//         counter.innerHTML = contador
//     }
// }


// const cervezas = [ "rubia", "negra", "roja", "ipa", "apa"]
// let input = document.getElementById("search")
// input.onchange = () => {
//     const element = cervezas.find((cerveza) => cerveza == input.value)
//     console.log(element)
// }

let calcular = document.getElementById("calcular")
let cuotas = document.getElementById("cuotas")
let precio = document.getElementById("precio")

calcular.onclick = () => {
    let precioFinal = precio.value/cuotas.value

    let print = document.createElement("h3")
    print.innerHTML = `Son ${cuotas.value} cuotas de $${precioFinal}`
    document.body.appendChild(print)
    // console.log(precioFinal)
}