//Declaracion de la funcion
function saludar() {
    let nombre = prompt("Ingrese su nombre")
    alert("Adios " + nombre)
}

//Llamado a la funcion
saludar()
saludar()
saludar()

const IVA = 1.21

function sumar(num1, num2) { //num1 y num2 parametros de mi funcion
    let resultado = num1 + num2
    console.log(num1)
    console.log(num2)
    console.log(resultado)
    console.log(IVA)
    IVA = 1.30
}

let numero1 = parseFloat(prompt("Ingrese el primer numero"))
let numero2 = parseFloat(prompt("Ingrese el segundo numero"))

sumar(numero1, numero2)

console.log(IVA)
//Valores por defecto de los parametros

function calcularImpuestos(valorBase, impPais = 0.30, impGanancias = 0.45, impBP = 0.25) {
    let impuestos = valorBase * impPais + valorBase * impGanancias + valorBase * impBP
    alert("La suma de sus impuestos es: " + impuestos)
    return valorBase + impuestos
}

let confirmacion = true

do {
    let valorVideojuego = parseFloat(prompt("Ingrese el valor de su videojuego y le devolvere cuanto sale con impuestos"))

    let costoTotal = calcularImpuestos(valorVideojuego, 0.50, 0.45)
    alert("El costo total es " + costoTotal)

    let respuesta = prompt("¿Desea ingresar otro precio para calcular?")

    if (respuesta == 'no') {
        confirmacion = false
    }

} while (confirmacion == true)


//Funcion normal

function sumarNormal(num1, num2) {
    return(num1 + num2);
}

//Funcion anonima
const sumarAnonima = function (num1, num2) {
    return num1 + num2
}

Funcion flecha (si es una sola linea de codigo, tiene un return implicito)
const sumarFlecha = (x, y) => x + y;



console.log(sumarNormal(5, 10));
console.log(sumarAnonima(5, 10));
console.log(sumarFlecha(5, 10));


// funcion normal

function sumarNormal(x, y) {
    return(x + y);
}
console.log(sumarNormal(10, 10));


// Funcion Anonima
const sumarAnonima = function (x, y) {
    return ( x + y )
}

console.log(sumarAnonima(10, 10));

// Funcion Flecha
const sumarFlecha = ( x, y ) => ( x + y);

console.log(sumarFlecha(10, 10));

function saludo(){
    let nombre = prompt("Ingresa tu nombre");
    alert("Hola " + nombre)
}
saludo();


for (let i = 0; i > saludo().lenght; i++){
    function saludo (){
        let nombre = prompt("Ingresa tu nombre");
        alert("Hola " + nombre);
       }
       saludo();
}
let age = parseInt(prompt("¿Cuantos años tienes?"));

function años() {

    if (age >= 18) {
        alert("Tu tienes " + age + " años " + "eres mayor de edad puedes votar!!!");
    } else {
        alert("Tu tienes " + age + " años " +  "lo siento eres menor de edad, no puedes votar!!!");
    }
}
años();


function signIn() {
    let password = (prompt("Entra tu password"));
    let newPassword = parseInt(password);

    if (isNaN(newPassword)) {
        alert("No puedes entrar, tienes uque ingresar 6 nuemros!");
    } else if (newPassword.length === 6 ) {
        alert("Bienvenido!!!");
    } else {
        alert("No puedes entrar, lo siento!");
    }
}

signIn();

function signIn() {
    let password = prompt("Entra tu password");

    if (password.length === 6 && !isNaN(password)) {
        alert("Bienvenido!!!");
    } else {
        alert("No puedes entrar, lo siento!");
    }
}

signIn();



function signIn() {
    let inputPassword = prompt("Entra tu password");

    if (inputPassword.length === 6 && !isNaN(inputPassword)) {
        alert("Bienvenido!!!");
    } else {
        alert("No puedes entrar, lo siento!");
    }
}

signIn();

Suma
let numero1 = parseInt(prompt("Ingrese un numero"));
let numero2 = parseInt(prompt("Ingresa el segundo numero"));

function suma(numero1, numero2) {
    alert(numero1 + numero2);
}

suma(numero1, numero2);

Resta
let numero1 = parseInt(prompt("Ingrese un numero"));
let numero2 = parseInt(prompt("Ingresa el segundo numero"));

function resta(numero1, numero2) {
    alert(numero1 - numero2);
}

resta(numero1, numero2);

Multiplicacion
let numero1 = parseInt(prompt("Ingrese un numero"));
let numero2 = parseInt(prompt("Ingresa el segundo numero"));

function multiplicar(numero1, numero2) {
    alert(numero1 * numero2);
}

multiplicar(numero1, numero2);

Division
let numero1 = parseInt(prompt("Ingrese un numero"));
let numero2 = parseInt(prompt("Ingresa el segundo numero"));

function division(numero1, numero2) {
    alert(numero1 / numero2);
}

division(numero1, numero2);

// Modal
let numero1 = parseInt(prompt("Ingrese un numero"));
let numero2 = parseInt(prompt("Ingresa el segundo numero"));

function modal(num1, num2) {
    resultado = num1 % num2
    alert(resultado);
}

modal(numero1, numero2);



alert("El costo total de tu producto es ... " + costoTotal);

function calcularImpuestos(valorBase, impPais = 0.30, impGanancias = 0.45, impBP = 0.25) {
    let impuestos = (valorBase * impPais) + (valorBase * impGanancias) + (valorBase * impBP);
    alert("Tus impuestos son... " + impuestos);

    // Aplicar descuento del 25% si el valorBase es mayor a 800
    if (valorBase > 800) {
        let descuento = valorBase * 0.25;
        valorBase -= descuento;
        alert("Producto con descuento del 25%: " + descuento);
    }

    alert("El costo total de tu videojuego es de..." + valorBase);
}

let valorVideoJuego = parseFloat(prompt("Ingresa el precio de tu producto"));
calcularImpuestos(valorVideoJuego);



function calcularImpuestos(valorBase, impPais = 0.30, impGanancias = 0.45, impBP = 0.25) {
    let impuestos = (valorBase * impPais) + (valorBase * impGanancias) + (valorBase * impBP);
    alert("Tus impuestos son... " + impuestos);
    let costoTotal = valorBase + impuestos;
    alert("El costo total de tu compra es " + costoTotal);

    if (costoTotal > 1000) {
        let costoHoddy = costoTotal * 0.25; // Calcula el costo del hoddy con descuento
        alert("Puedes llevar un hoddy con descuento del 25%, su costo sería $" + costoHoddy + " y también te lo enviamos gratis");
        let respuesta = parseInt(prompt("¿Deseas llevar un hoddy? (1 para sí, 0 para no)"));

        if (respuesta === 1) {
            alert("Hoddy incluido en tu carrito...");
        } else {
            let costoDescuentoTotal = costoTotal - costoHoddy;
            alert("El costo total de tu compra es de " + costoDescuentoTotal + ". Tu factura electrónica fue enviada a tu email y tu envío estará llegando en 3 días.");
            alert("¡Gracias por tu compra, te esperamos nuevamente!");
        }
    } else {
        alert("El costo total de tu compra es de " + costoTotal + ". Tu factura electrónica fue enviada a tu email y tu envío estará llegando en 3 días.");
        alert("¡Gracias por tu compra, te esperamos nuevamente!");
    }
}

let valorOutfit = parseFloat(prompt("Ingresa el precio de tu producto"));
calcularImpuestos(valorOutfit, 0.30, 0.45, 0.25);

// Discount or Getoff

function calcularImpuestos(valorBase, impIva){
    let impuestos = (valorBase * impIva);
    let valorEnvio = 20;
    let costoTotal = (valorBase + impuestos);
    let costoMasEnvio = (valorEnvio + costoTotal);
    alert("Tus impuestos son... " + " " +  " $" + impuestos + " " +  "+ " + "envio..." +  " $" + valorEnvio);
    // alert("El costo total de tu compra es " + costoTotal);
    // return valorBase + impuestos

    if ( costoTotal > 1000 ) {
        let costoHoddy = (499 - 499 * 0.25)
        alert("Puedes llevar un hoddy con descuento del 25%, su costo seria $" + costoHoddy + " " + " y tambien te lo enviamos gratis");
        let respuesta = parseInt(prompt("¿Deseas llevar un hoddy? (1 para sí, 0 para no)"));

            if (respuesta === 1 ) {
                let costoDescuentoTotal = costoTotal + costoHoddy
                alert("Hoddy incluida en tu carrito...");
                alert("El costo total de tu compra es de ....." + " " +  "$" + costoDescuentoTotal + ". " + " Tu factura electronica fue enviada a tu email y tu envio estara llegando en 3 dias.");
                alert("Recuerda tu envio no lleva cargo. Muchas gracias por tu compra, te esperamos nuevamente!!!");
            } else {
                alert("El costo total de tu compra es de ....." + " " + "$" + costoMasEnvio + " " + "incluido envio" + ". " + " Tu factura electronica fue enviada a tu email y tu envio estara llegando en 3 dias.");
                alert("Muchas gracias por tu compra, te esperamos nuevamente!!!");
            }
    } else {
        alert("El costo total de tu compra es de ....." +  "$" + costoMasEnvio + " . " + " Tu factura electronica fue enviada a tu email y tu envio estara llegando en 3 dias.");
        alert("Muchas gracias por tu compra, te esperamos nuevamente");
    }
}

let valorOutfit = (parseFloat(prompt("Ingresa el precio de tu producto")));
let costoTotal = calcularImpuestos(valorOutfit, 0.19);
