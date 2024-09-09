//Tipos Básicos

let age2: number = 25;
const fistName1: string = 'Luiz';
const isValid: boolean = true;

const ids: number[] = [1, 2, 3, 4, 5];
const booleans: boolean[] = [true, false, true];
const names: string[] = ['Luiz', 'Otávio', 'Miranda'];

//tupla
const person: [string, number, boolean] = ['Luiz', 25, true];

// Lista de tuplas
const people: [string, number][] = [
    ['Luiz', 25],
    ['Otávio', 30],
    ['Miranda', 40]
];

// Intersection
const productId: string | number | boolean = true;

//cEnum
enum Direction{
    Up = 1,
    Down = 2

}

const direction = Direction.Up;

console.log(age2, fistName1, isValid);
console.log(ids, booleans, names);
console.log(direction);





