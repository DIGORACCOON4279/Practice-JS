//localStorage

localStorage.setItem("saludo", "bienvenidos!!")
localStorage.setItem("comision", 47105)
localStorage.setItem("aprobado", true)

let comision = localStorage.getItem("comision")
let saludo = localStorage.getItem("saludo")

console.log(comision, saludo)

//sessionStorage

sessionStorage.setItem("comida", "asado")
sessionStorage.setItem("puntaje", 35)

let comida = sessionStorage.getItem("comida")
console.log(comida)

//recorrer el array
for (let i=0; i<localStorage.length; i++) {
    let clave = localStorage.key(i)
    console.log("Clave: "+ clave, "Valor: "+localStorage.getItem(clave))
}

//borrar elementos
localStorage.removeItem("saludo")
sessionStorage.removeItem("puntaje")

for (let i=0; i<localStorage.length; i++) {
    let clave = localStorage.key(i)
    console.log("Clave: "+ clave, "Valor: "+localStorage.getItem(clave))
}

localStorage.clear()
sessionStorage.clear()