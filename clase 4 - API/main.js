// Generar una función que reciba un array de personajes y un nombre de Casa, y devuelva en un array nuevo todos los personajes de la Casa seleccionada.
console.log("EJERCICIO 1")

function filtrarPorCasa(array, casa) {
    let personajesCasas = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].house === casa) {
            personajesCasas.push(array[i]);
        }
    }
    return personajesCasas;
}
console.log(filtrarPorCasa(personajes, "Gryffindor"))

// Generar una función que reciba un array de personajes, y devuelva un array nuevo con todos los personajes. Cada elemento del nuevo array sólo debe tener el nombre del personaje, la Casa y el actor que lo interpreta.
console.log("EJERCICIO 2")

function personajesCasaActor(array) {
    let arrayAux = [];
    for (let i = 0; i < array.length; i++) {
        let personajeAuxiliar = {
            nombre: array[i].name,
            house: array[i].house,
            actor: array[i].actor,
        };
        arrayAux.push(personajeAuxiliar);
    }
    return arrayAux;
}
console.log(personajesCasaActor(personajes))

// Generar una función que reciba un array de personajes y que por cada uno escriba en la consola la Casa de ese personaje o "Sin Casa" en caso de no tener.

console.log("EJERCICIO 3")

function casaDePersonajes(array) {
    let casas;
    for (let i = 0; i < array.length; i++) {
        let nombrePersonaje = array[i].name;
        let casaPersonaje = array[i].house;
        if (casaPersonaje) {
            casas =
                "Personaje: " +
                nombrePersonaje +
                " " +
                "-" +
                " " +
                "Está en la casa: " +
                casaPersonaje;
        } else {
            casas =
                "Personajes: " + nombrePersonaje + " " + "-" + " " + "Sin Casa";
        }
        console.log(casas);
    }
}
console.log(casaDePersonajes(personajes))