// Versión 1
var pregunta = prompt("Ingresa tu opción: piedra, papel o tijera");
var user = pregunta.toLowerCase();
var options = ["piedra", "papel", "tijera"];
var machine = options[Math.floor(Math.random() * 3)];

switch (true) {
    case (user == machine):
        console.log("es un empate");
        break;
    case ((user === "piedra" && machine === "papel") || (user === "papel" && machine === "tijera") || (user === "tijera" && machine === "piedra")):
        console.log("!Perdiste¡, machine escogió " + machine);
        break;
    default:
        console.log("!Ganaste¡, machine escogió " + machine);
}

// Versión 2
var pregunta = prompt("Ingresa tu opción: piedra, papel o tijera");
var user = pregunta.toLowerCase();
var options = ["piedra", "papel", "tijera"];
var machine = options[Math.floor(Math.random() * 3)];

switch (user) {
    case piedra:
        switch (machine) {
            case piedra:
                console.log("Empate");
                break;
            case papel:
                console.log("Pierdes");
                break;
            default:
                console.log("Ganas");
                break;
        };
        break;
    case papel:
        switch (machine) {
            case piedra:
                console.log("Ganas");
                break;
            case papel:
                console.log("Empate");
                break;
            default:
                console.log("Pierdes");
                break;
        };
        break;
    default:
        switch (machine) {
            case piedra:
                console.log("Pierdes");
                break;
            case papel:
                console.log("Ganas");
                break;
            default:
                console.log("Empate");
                break;
        };
        break;
}

// Versión 3
var pregunta = prompt("Ingresa tu opción: piedra, papel o tijera");
var user = pregunta.toLowerCase();
var options = ["piedra", "papel", "tijera"];
var machine = options[Math.floor(Math.random() * 3)];

switch (true) {
    case user === machine:
        console.log("Empate");
        break;
    case user === piedra && machine !== papel:
        console.log("Ganas");
        break;
    case user === papel && machine !== tijera:
        console.log("Ganas");
        break;
    case user === tijera && machine !== piedra:
        console.log("Ganas");
        break;
    default:
        console.log("Pierdes");
        break;
}