function nombreCasaActor(array) {
    let nombre = "";
    let casa = "";
    let genero = "";
    let actor = "";

    for (let index = 0; index < personajes.length; index++) {
        nombre = personajes[index].name;
        casa = personajes[index].house;
        genero = personajes[index].gender;
        actor = personajes[index].actor;

        //Personaje con casa y nombre de actriz
        if (casa != "" && genero == "female" && actor != "") {
            console.log(
                nombre +
                " " +
                "de la casa " +
                casa +
                " y la interpreta la actriz: " +
                actor
            );
        }

        //Personaje con casa y con nombre de actor
        if (casa != "" && genero == "male" && actor != "") {
            console.log(
                nombre +
                " " +
                "de la casa " +
                casa +
                " y lo interpreta el actor: " +
                actor
            );
        }

        //Personaje sin casa y con nombre de actriz
        if (casa == "" && genero == "female" && actor != "") {
            console.log(
                nombre + " sin casa e interpretada por la actriz: " + actor);
        }

        //Personaje sin casa y con nombre de actor
        if (casa == "" && genero == "male" && actor != "") {
            console.log(
                nombre + " sin casa e interpretado por el actor: " + actor
            );
        }

        //Personaje sin casa y sin nombre de actriz
        if (casa == "" && genero == "female" && actor == "") {
            console.log(nombre + " sin casa");
        }

        //Personaje sin casa y sin nombre de actor
        if (casa == "" && genero == "male" && actor == "") {
            console.log(nombre + " sin casa");
        }

        //Personaje 
        if (genero == "") {
            console.log(nombre + " sin casa");
        }
    }
}

nombreCasaActor(personajes);

function nombreCasaActor2(array) {
    let nombre = "";
    let casa = "";
    let genero = "";
    let actor = "";
    let arrayDePJs = [];
    for (let index = 0; index < personajes.length; index++) {
        nombre = personajes[index].name;
        casa = personajes[index].house;
        genero = personajes[index].gender;
        actor = personajes[index].actor;

        //Personaje con casa y nombre de actriz
        if (casa != "" && genero == "female" && actor != "") {
            arrayDePJs.push(
                nombre +
                " " +
                "de la casa " +
                casa +
                " y la interpreta la actriz: " +
                actor
            );
        }

        //Personaje con casa y con nombre de actor
        if (casa != "" && genero == "male" && actor != "") {
            arrayDePJs.push(
                nombre +
                " " +
                "de la casa " +
                casa +
                " y lo interpreta el actor: " +
                actor
            );
        }

        //Personaje sin casa y con nombre de actriz
        if (casa == "" && genero == "female" && actor != "") {
            arrayDePJs.push(
                nombre + " sin casa e interpretada por la actriz: " + actor
            );
        }

        //Personaje sin casa y con nombre de actor
        if (casa == "" && genero == "male" && actor != "") {
            arrayDePJs.push(
                nombre + " sin casa e interpretado por el actor: " + actor
            );
        }

        //Personaje sin casa y sin nombre de actriz
        if (casa == "" && genero == "female" && actor == "") {
            arrayDePJs.push(nombre + " sin casa");
        }

        //Personaje sin casa y sin nombre de actor
        if (casa == "" && genero == "male" && actor == "") {
            arrayDePJs.push(nombre + " sin casa");
        }

        //Personaje
        if (genero == "") {
            arrayDePJs.push(nombre + " sin casa");
        }
    }
    return arrayDePJs;
}

console.log(nombreCasaActor2(personajes));

function nombreCasaActorObj(array) {
    let arrayAuxiliar = [];
    for (let i = 0; i < array.length; i++) {
        let personaAux = {
            nombre: array[i].name,
            house: array[i].house,
            actor: array[i].actor
        }
        arrayAuxiliar.push(personaAux)
    }
    return arrayAuxiliar;
}

console.log(nombreCasaActorObj(personajes));