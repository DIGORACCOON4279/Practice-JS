//getElementById
// let contenedor = document.getElementById("div-container")
// let titulo = document.getElementById("main-h1")
// console.log(contenedor.innerHTML)
// console.log(titulo.innerHTML)

//getElementsByClassName
//let pastas = document.getElementsByClassName("pastas")
// console.log(pastas[0].innerHTML)
// console.log(pastas[1].innerHTML)
// console.log(pastas[2].innerHTML)
// for (const pasta of pastas) {
//     console.log(pasta.innerHTML)
// }

//getElementByTagName
//let articulos = document.getElementsByTagName("article")
// console.log(articulos[0].innerHTML)
// console.log(articulos[1].innerHTML)
// console.log(articulos[2].innerHTML)
// console.log(articulos[3].innerHTML)
// for (const articulo of articulos) {
//     console.log(articulo.innerHTML)
// }

//innerText
// titulo.innerText = "Hola Argentina"
// console.log(titulo.innerText)

//innerHTML
// let divContainer = document.getElementById("container")
// divContainer.innerHTML = "<h2>Hola Comision <span>47105</span></h2>"
// divContainer.className = "header"

//append
let subtitulo = document.createElement("h2")
subtitulo.innerHTML = "<span>Aguante la pizza</span>"
document.body.append(subtitulo)

//remove
let titulo = document.getElementById("main-h1")
titulo.remove()

let pastas = document.getElementsByClassName("pastas")
pastas[0].remove()

let zapatillas = ["nike", "adidas", "vans", "converse"]
let marcas = document.getElementById("marcas")
for (const zapatilla of zapatillas) {
    let li = document.createElement("li")
    li.innerHTML = zapatilla
    marcas.appendChild(li)
}

let vans = { id: 1, nombre: "vans old school", precio: 20000}
let datos = "ID: "+vans.id + " modelo: " +vans.nombre + " precio: "+vans.precio
console.log(datos)
let datos2 = `ID: ${vans.id} modelo: ${vans.nombre} precio: ${vans.precio}`
console.log(datos2)

const productos = [
    {id: 1, nombre:"celular", precio: 1500},
    {id: 2, nombre: "televisor", precio: 1000},
    {id: 3, nombre: "heladera", precio: 3000}
]
for (const producto of productos) {
    let contenedor = document.createElement("div")
    contenedor.innerHTML = `<span>ID: ${producto.id}</span>
                            <h3>Producto: ${producto.nombre}</h3>
                            <h4>Precio: $${producto.precio}</h4>`
    document.body.appendChild(contenedor)
}
