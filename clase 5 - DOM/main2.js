//Exercise 2
function cervezaByAlcohol(array, nivelAlcohol) {
    let arrayAuxiliar = [];
    for (let i = 0; i < array.length; i++) {
        let birrasAux = {
            nombre: array[i].name,
            abv: array[i].abv,
            ibu: array[i].ibu,
        };
        if (birrasAux.abv <= nivelAlcohol) {
            arrayAuxiliar.push(birrasAux);
        }
    }
    return arrayAuxiliar;
}

//Exercise 3
function las10MasPulentas(array) {
    let arrayAux = [];
    for (let i = 0; i < array.length; i++) {
        let birrasAux = {
            nombre: array[i].name,
            abv: array[i].abv
        }
        arrayAux.push(birrasAux);
    }
    return arrayAux
        .sort(function(a, b) {
            return b.abv - a.abv;
        })
        .slice(0, 10);
}

//Exercise 4
function las10MasRicas(array) {
    let arrayAux = [];
    for (let i = 0; i < array.length; i++) {
        let birrasAux = {
            nombre: array[i].name,
            ibu: array[i].ibu,
        };
        arrayAux.push(birrasAux);
    }
    return arrayAux
        .sort(function(a, b) {
            return b.ibu - a.ibu;
        })
        .slice(0, 10);
}

//Exercise 5
function manioso(array, conque, booleano) {

    let arrayAux = [];
    for (let i = 0; i < array.length; i++) {
        let birrasAux = {
            nombre: array[i].name,
            abv: array[i].abv,
            ibu: array[i].ibu,
        };
        arrayAux.push(birrasAux);
    }
    if (conque == "abv") {
        if (booleano == true) {
            return arrayAux
                .sort(function(a, b) {
                    return b.abv - a.abv;
                }).slice(0, 10);
        } else {
            return arrayAux
                .sort(function(a, b) {
                    return a.abv - b.abv;
                })
                .slice(0, 10);
        }
    } else if (conque == "ibu") {
        if (booleano == true) {
            return arrayAux.sort(function(a, b) {
                    return b.ibu - a.ibu;
                })
                .slice(0, 10);
        } else {
            return arrayAux
                .sort(function(a, b) {
                    return a.ibu - b.ibu;
                })
                .slice(0, 10);
        }
    } else {
        return "como? fijate bien lo que pones";
    }
}
//console.table(manioso(birras, "iba", false));

//Exercise 6
function mostrarArrayEnTabla(array) {
    const tablaBirras = document.querySelector("#tabla-birras tbody");
    for (let index = 0; index < array.length; index++) {
        let fila = document.createElement("tr");

        fila.innerHTML += `
    <tr>
        <td>${birras[index].name}</td>
        <td>${birras[index].abv}</td>
        <td>${birras[index].ibu}</td>
    </tr>
    `
        tablaBirras.appendChild(fila);
    }
}

mostrarArrayEnTabla(birras)

function mostrarTablaMasAlcoholicas10Desc(array) {
    las10MasPulentas(array);
}

mostrarTablaMasAlcoholicas10Desc(birras)