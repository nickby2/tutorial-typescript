"use strict";
//Tipos Básicos
let age2 = 25;
const fistName = 'Luiz';
const isValid = true;
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, true];
const names = ['Luiz', 'Otávio', 'Miranda'];
//tupla
const person = ['Luiz', 25, true];
// Lista de tuplas
const people = [
    ['Luiz', 25],
    ['Otávio', 30],
    ['Miranda', 40]
];
// Intersection
const productId = true;
//cEnum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
const direction = Direction.Up;
console.log(age2, fistName, isValid);
console.log(ids, booleans, names);
console.log(direction);
