var papel = "papel"
var piedra = "piedra"
var tijera = "tijera"

function resultadoUNO(user, cpu) {
    if (user != cpu) {
        if (user == papel && cpu == piedra) {
            console.log("El usuario GANO con " + papel)
        }
        else if (user == piedra && cpu == tijera) {
            console.log("El usuario GANO con " + piedra)
        }
        else if (user == tijera && cpu == papel) {
            console.log("El usuario GANO con " + tijera)
        }
        else if (user == papel && cpu == tijera) {
            console.log("La cpu GANO con " + tijera)
        }
        else if (user == piedra && cpu == papel) {
            console.log("La cpu GANO con " + papel)
        }
        else if (user == tijera && cpu == piedra) {
            console.log("La cpu GANO con " + piedra)
        }
    }
    else { console.log("Empate") }
}
resultadoUNO(papel, piedra)

function resultadoDOS(user, cpu) {
    if (user != cpu) {
        if ((user == papel && cpu == piedra) || (user == piedra && cpu == tijera) || (user == tijera && cpu == papel)) {
            console.log("El usuario GANO")
        }
        else if ((user == papel && cpu == tijera) || (user == piedra && cpu == papel) || (user == tijera && cpu == piedra)) {
            console.log("La cpu GANO")
        }
    }
    else {
        console.log("Empate")
    }
}
resultadoDOS(papel, tijera)