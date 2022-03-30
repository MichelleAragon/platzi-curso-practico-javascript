var piedra = "piedra";
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