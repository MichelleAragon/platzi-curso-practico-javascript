//Piedra, papel O tijera ¡1,2,3 YA! CON Switch.

var piedra = "piedra";
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

resultado()
