//Un objeto se compone de atributos clave-valor
// const alumno = {
//     nombre: "Pepe",
//     apellido: "Perez",
//     email: "pepe@pepe.com",
//     password: "pepe123",
//     dni: 123123
// }

// alumno.apellido = "Martinez"
// console.log(alumno.apellido.toLowerCase())
// parseFloat()
// alumno = null



//Los objetos en JS se crean con constantes



// class Producto {
//     constructor(code, nombre, categoria, precio, stock) {
//         this.code = code //Estoy definiendo que mi propiedad code sea igual al code que llegue como parametro
//         this.nombre = nombre
//         this.categoria = categoria
//         this.precio = precio
//         this.stock = stock
//     }

//     aumentarPrecio(porcentajeAumento) { //Por ejemplo 1.3
//         const precioRedondeado = Math.ceil(this.precio *= porcentajeAumento) //this.precio = this.precio * porcentajeAumento
//         this.precio = precioRedondeado
//     }

//     aumentarStock(cantidadProductos) {
//         this.stock += cantidadProductos
//     }
// }

// const producto1 = new Producto("A123", "Arroz", "Legumbre", 450, 20) //Estoy generando una nueva instancia de la clase Producto


// producto1.aumentarPrecio(1.3123213)

// producto1.aumentarStock(20)

// console.log(producto1)



// class Animal {
//     constructor(nombre, nombreCientifico, habitat) {
//         this.nombre = nombre
//         this.nombreCientifico = nombreCientifico
//         this.habitat = habitat
//     }

//     duerme() {
//         console.log("Estoy durmiendo")
//     }

//     comiendo() {
//         console.log("Estoy comiendo")
//     }
// }

// class Mamifero extends Animal { //Mamifero va a ser una extension de la clase Animal (La clase Animal es la clase Padre de la clase Mamifero)
//     constructor(colorPelaje, nombre, nombreCientifico, habitat) {
//         super(nombre, nombreCientifico, habitat) //super es superclass y es llamar a la clase padre
//         this.colorPelaje = colorPelaje
//     }

//     amamantar() {
//         console.log("Estoy amamantando")
//     }
// }

// class Reptil extends Animal {
//     constructor(esVenonoso, nombre, nombreCientifico, habitat) {
//         super(nombre, nombreCientifico, habitat)
//         this.esVenonoso = esVenonoso
//     }

//     ponerHuevos() {
//         console.log("Pongo huevos")
//     }
// }

// const mamifero1 = new Mamifero("Marron", "Lobo", "Lobitus", "Bosque")
// const reptil1 = new Reptil("No", "Cocodrilo", "Cocitus", "Pantano")

// reptil1.duerme()
// mamifero1.comiendo()
// console.log(mamifero1)
// console.log(reptil1)


/************************************** Go over ********************************/

// const alumno = {
//     nombre: "Diego",
//     apellido: "Marin",
//     nickName: "Raccoon",
//     email: "diego@mail.com",
//     password: "diego123",
//     id: "71791631",
// }

// console.log((alumno.nombre), (alumno.apellido), (alumno.email), (alumno.password), (alumno.id));
// alert("Tu nombre es " + (alumno.nombre) + " " + (alumno.apellido));
// alumno.nombre = "Exxo";
// console.log((alumno.nombre.toUpperCase()), (alumno.apellido), (alumno.email), (alumno.password), (alumno.id));
// alert("Mi nuevo nombre es " + (alumno.nombre) + " " + (alumno.apellido));
// alert("Mi nuevo id es: " + (alumno.id));




// class Producto {
//     constructor(code, nombre, categoria, precio, stock) {
//         this.code = code //Estoy definiendo que mi propiedad code sea igual al code que llegue como parametro
//         this.nombre = nombre
//         this.categoria = categoria
//         this.precio = precio
//         this.stock = stock
//     }

//     aumentarPrecio(porcentajeAumento) { //Por ejemplo 1.3
//         const precioRedondeado = Math.ceil(this.precio *= porcentajeAumento) //this.precio = this.precio * porcentajeAumento
//         this.precio = precioRedondeado
//     }

//     aumentarStock(cantidadProductos) {
//         this.stock += cantidadProductos
//     }
// }

// const producto1 = new Producto("A123", "Arroz", "Legumbre", 450, 20) //Estoy generando una nueva instancia de la clase Producto


// producto1.aumentarPrecio(1.3123213)

// producto1.aumentarStock(20)

// console.log(producto1)

// class Producto{
//     constructor(code, nombre, categoria, precio, stock) {
//         this.code = code;
//         this.nombre = nombre;
//         this.categoria = categoria;
//         this.precio = precio;
//         this.stock = stock;
//     }

//     aumentarPrecio(porcentajeAumento) {
//         const precioRedondeado = Math.ceil(this.precio *= porcentajeAumento);
//         this.precio = precioRedondeado;
//     }

//     aumentarStock(cantidadProductos) {
//         this.stock += cantidadProductos;
//     }
// }

// const producto1 = new Producto("A123", "outfit", "Street", 499, 30);
// const producto2 = new Producto("A124", "outfit", "UrbanChampion", 599, 30);
// const producto3 = new Producto("A125", "outfit", "Street", 999, 30);
// const producto4 = new Producto("A126", "outfit", "UrbanChampion", 499, 30);
// const producto5 = new Producto("A127", "outfit", "UrbanChampion", 599, 30);


// producto1.aumentarPrecio(1.3);
// producto1.aumentarStock(50);
// console.log(producto1);

// producto2.aumentarPrecio(1.3);
// producto2.aumentarStock(10);
// console.log(producto2);

// producto3.aumentarPrecio(1.3);
// producto3.aumentarStock(40);
// console.log(producto3);

// producto4.aumentarPrecio(1.3);
// producto4.aumentarStock(15);
// console.log(producto4);

// producto5.aumentarPrecio(1.3);
// producto5.aumentarStock(25);
// console.log(producto5);


// class Producto{
//     constructor(code, nombre, categoria, precio, stock){
//         this.code = code;
//         this.nombre = nombre;
//         this.categoria = categoria;
//         this.precio = precio;
//         this.stock = stock;
//     }

//     aumentarPrecio(aumentarPorcentaje){
//         const precioRedondeado = Math.ceil(this.precio *= aumentarPorcentaje);
//         this.precio = precioRedondeado;
//     }

//     aumentarStock(cantidadProductos){
//         this.stock += cantidadProductos;
//     }
// }

// // Se crean instancias u objetos de nuevos productos

// const producto1 = new Producto("A001", "Outfit", "Street", 499, 25);
// const producto2 = new Producto("A002", "Outfit", "Champion", 599, 50);
// const producto3 = new Producto("A003", "Outfit", "Urban", 999, 75);
// const producto4 = new Producto("A004", "Outfit", "Street", 499, 25);
// const producto5 = new Producto("A005", "Outfit", "champion", 599, 50);

// // Aumento Porcentaje y stock

// producto1.aumentarStock(20);
// producto1.aumentarPrecio(1.3);
// console.log(producto1);

// producto2.aumentarStock(30);
// producto2.aumentarPrecio(1.5);
// console.log(producto2);

// producto3.aumentarStock(25);
// producto3.aumentarPrecio(2.0);
// console.log(producto3);

// producto4.aumentarStock(10);
// producto4.aumentarPrecio(2.5);
// console.log(producto4);

// producto5.aumentarStock(15);
// producto5.aumentarPrecio(2.0);
// console.log(producto5);

/*************************************  Break a Leg *****************************************************/

class Products {
    constructor(code, name, category, price, stock) {
        this.code = code;
        this.name = name;
        this.category = category;
        this.price = price;
        this.stock = stock;
    }

    availabityProduct(inStock, newArrivals, soldOut) {

    }




}
