// Execise 1
console.warn("Execise 1");

function reversador(numeros) {
    var xArray = Array.from(numeros.toString());
    var alreve = []
    for (i = numeros.toString().length; i >= 0; i--) {
        alreve.push(xArray[i])
    }
    return alreve.join("");
}

console.log(reversador(12345))

// Execise 2
console.warn("Execise 2");

function sortAlphabeticalAString(string) {
    return string.split("").sort().join("");
}

console.log(sortAlphabeticalAString("welcome"));

// Execise 3
console.warn("Execise 3");

function primerLetraMayu(string) {
    var array2 = string.toString().split(" ");
    var otroarray;
    var array3;
    var array1millon = "";
    for (i = 0; i < array2.length; i++) {
        otroarray = Array.from(array2[i].toString());
        array3 = otroarray.shift().toUpperCase() + otroarray.join("");
        array1millon = array1millon + " " + array3;
    }
    return array1millon;
}


console.log(primerLetraMayu("prince of persia"));

// Execise 4
console.warn("Execise 4");

x = "Web Development Tutorial";

function mostrarStringMasGrande(string) {
    cadena = string.toString().split(" ");
    var grande = cadena[0];
    for (i = 0; i < cadena.length - 1; i++) {
        if (grande.length < cadena[i + 1].length) {
            grande = cadena[i + 1];
        }
    }
    console.log(grande);
}

mostrarStringMasGrande(x);