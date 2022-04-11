
    /*VALORES PRIMITIVOS

40

"400"

true
false
//se creo por un matematico britanico con el objetivo de validar si tomamos una decision o no

null
undefined 
// valores placeholders VALORES RESERVADOS para VALORES FALTANTES


// VALORES TIPO OBJETOS 

[1,2,3]
//ARRAY tipo objeto 

{nombre: "Diego"} // valor tipo objeto


var nombre = "Diego";

//funciones 

// Declarativas

function miFuncion() {
    return 3;
}


// Expresion

var miFuncion = function(a,b) {
    return a + b;
}

//if (si algo es verdad){
    //console.log("Hola")


var edad = 18;

if(edad === 18) {
    console.log("Puedes votar, sera tu primera votacion");
} else if (edad > 18) {
    console.log("Puedes votar");
} else {
    console.log("Espera a tu mayoria de edad para votar");
}

var numero = 1;

var resultado = numero === 1 ? "Si soy un 1" : "No soy un 1";*/ 

//Piedra, papel O tijera ¡1,2,3 YA! CON IF, ELSE IF, ELSE.


/*var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";


var resultado = function(user,pc) { 
    if (user === piedra && pc === papel) {
    console.log("Ganó PC");
    } else if (user === papel && pc === tijera) {
    console.log("Ganó pc")
    } else if (user === tijera && pc === piedra) {
    console.log("Ganó PC");
    } else if (user === papel && pc === piedra) {
    console.log("Ganó User"); 
    } else if (user === tijera && pc === papel) {
    console.log("Ganó user");
    } else if (user === piedra && pc === tijera) {
    console.log("Ganó User");
    } else if (user === pc) {
        console.log ("Empate");
    }
}

resultado();


var numero = 1;

switch (numero) {
    case 1:
        console.log("Soy uno!");
        break;
    case 10:
        console.log("Soy un diez!");
        break;
    case 100:
        console.log("Soy un cien");
        break;
        default:
            console.log("No soy nada");
}*/

//Piedra, papel O tijera ¡1,2,3 YA! CON Switch.

/*var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";

function resultado(user, pc) {
    switch (user) {
        case "piedra":
            console.log(pc === "tijera" ? "gano user" : pc === "piedra" ? "empate" : "gano pc")
            break;
        case "tijera":
            console.log(pc === "papel" ? "gano user" : pc === "tijera" ? "empate" : "gano pc")
            break;
        case "papel":
            console.log(pc === "piedra" ? "gano user" : pc === "papel" ? "empate" : "gano pc")
            break;
    }
}

resultado()*/

/*var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

console.log(frutas);

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var i =0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}*/

/*var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes (estudiante){
    console.log(` Hola, ${estudiante}`);
}

while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante)
}*/


/*DESAFIO OBJETO - FUNCION CONSTRUCTORA
var howManyCars = prompt("¿Cuantos carros deseas crear ?");
if (Number(howManyCars) === NaN){
    throw new Error("Debes colocar un numero");
}


function Car(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
}

var cars = [];

for( var i = 0; i < howManyCars; i++){
    var brand = prompt("Esta es la marca de auto");
    var model = prompt("Este es el modelo de tu auto");
    var year = prompt("Este es el año de tu auto");
    var car = new Car(brand, model, year);
    cars.push(car);
}

console.table(cars);*/

function car(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
}

var newCar = new car("tesla", "model 3", "2020");

var articulos = [
    {nombre: "bici", costo: 2500 },
    {nombre: "Tv", costo: 2000 },
    {nombre: "laptop", costo: 25000 },
    {nombre: "celular", costo: 10000 },
    {nombre: "audifonos", costo: 700 },
    {nombre: "Teclado", costo: 1000 },
];

var articulosFiltrados = articulos.filter(function(articulo){ 
    return articulo.costo <= 2500 });

articulosFiltrados



