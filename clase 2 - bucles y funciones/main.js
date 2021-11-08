//Exercise 1
console.warn("Exercise 1");

var nombres = ["Macarena", "Alan", "Emiliano", "Priscila", "Felipe", "Branko"];
var ordenados = nombres.sort();

console.log("El primero en la lista " + ordenados[0]);
console.log("El ultimo de la lista " + ordenados[ordenados.length - 1]);

for (i = 0; i < ordenados.length; i++) {
    console.log(ordenados[i]);
}

//Exercise 2
console.warn("Exercise 2");

var edades = [34, 24, 25, 24, 27, 32, 20];
var i = 0;

while (i < edades.length) {
    if (edades[i] % 2 == 0) {
        console.log(edades[i] + " (while)");
    }
    i++;
}

for (i = 0; i < edades.length; i++) {
    if (edades[i] % 2 == 0) {
        console.log(edades[i] + " (for)");
    }
}

//Exercise 3
console.warn("Exercise 3");

function mostrarMasChico(cadena) {
    var chico = cadena[0];
    for (i = 0; i < cadena.length; i++) {
        if (chico > cadena[i + 1]) {
            chico = cadena[i + 1];
        }
    }
    console.log(chico);
}

mostrarMasChico(edades);

//Exercise 4
console.warn("Exercise 4");

function mostrarMasGrande(cadena) {
    var grande = cadena[0];
    for (i = 0; i < cadena.length; i++) {
        if (grande < cadena[i + 1]) {
            grande = cadena[i + 1];
        }
    }
    console.log(grande);
}

mostrarMasGrande(edades);

//Exercise 5
console.warn("Exercise 5");

function mostrarNumeroEnIndice(pepito, indice) {
    console.log(pepito[indice]);
}
var array = [
    3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
    100,
];
var index = 1;

mostrarNumeroEnIndice(array, index);

//Exercise 6
console.warn("Exercise 6");


function mostrarRepetido(array) {
    var iguales = [];
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (i <= j && array[i] == array[j] && i != j) {
                console.log(array[i]);
            }
        }
    }

}

mostrarRepetido(array);

//Exercise 7
console.warn("Exercise 7");

myColor = ["Red", "Green", "White", "Black"];

function mostrarArrayComoString(array) {
    var todojunto = "";
    for (i = 0; i < array.length; i++) {
        todojunto += '"' + array[i] + '"';
        if (i != (array.length - 1)) {
            todojunto += ',';
        }
    }
    console.log(todojunto);
}

mostrarArrayComoString(myColor)