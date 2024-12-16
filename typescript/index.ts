// Annotations
// Strings
let myName: string = 'Mallo';
myName = 'lyoko200';
//console.log(myName);

// Numbers
let myNumber: number = 12;
//console.log(myNumber);

// Booleans
let myBoolean: boolean = true;
//console.log(myBoolean);

// Type Inference
let tech = 'TypeScript';
let randomNum = 8;
//console.log(typeof tech);

// Any: use rarely 
let test: any = 'Mallo';
test = 12;
test = true;
//console.log(test);

// Type annotation, function parameters
// Regular function
function addThree(num: number){
    return num += 2;
}
//console.log(addThree(1));

// Arrow function (TS gives warning if more or less arguments are provided)
const double = (num1: number, num2: number) => num1 * num2;
//console.log(double(2, 5));

// Default parameter
function people(person: string = 'Mallo'){
    return `Ok you are ${person}`;
}
const guest = people();
//console.log(guest);

// Return Annotations
// Regular functions
function squared(num: number): number {
    return num * num;
}
//console.log(squared(4));

// Arrow functions
const triple = (num: number): number => num * 3;
//console.log(triple(3));

// Void type
function message(text: string): void {
    console.log(`This is a really nice ${text}`);
}
//message('cat');

// Never keyword
function throwError(msg: string): never {
    throw new Error(msg);
}

function infLoop(): never {
    while(true){}
}

// Arrays
const nums: number[] = [1, 2, 3, 4];
//console.log(nums[1]);

const names: Array<string> = [];
names.push('Mallo');
//console.log(names);

// Multi-dimensional Arrays
const matrix: number[][] = [[1, 2], [3, 4]];
//console.log(matrix[0][1]);

const tripleDim: string[][][] = [[['Mallo']]];
//console.log(tripleDim[0][0][0]);

// Objects
const person: {name: string; age: number} = {
    name: 'Mallo',
    age: 30
};
//console.log(person.name);

function person2(name: string, age: number): {name: string; age: number} {
    return {
        name: name,
        age: age
    }
};
//console.log(person2('Mallo', 30));

// Types Aliases
type MyString = string;
const firstName: MyString = 'Mallo';
//console.log(firstName);

type Cat = {
    name: string,
    readonly age: number, // readonly does not allow the modification of a variable once declared
    email?: string // Optional property
}

function helloCat(cat: Cat) {
    console.log(`Name: ${cat.name}, Age: ${cat.age}`)
}
const myCat: Cat = {name: 'Felix', age: 12};
//helloCat(myCat);

// Intersection Types
type Person = {
    name: string;
    age?: number
}

type Employee = {
    id: number;
    readonly position: string
}

type Marco = Person & Employee;
const marco: Marco = {
    name: 'Marco',
    id: 200,
    position: 'CEO'
}
//console.log(marco.age)

// Union Types
const book: number | string = 1;
const books: (number | string)[] = [1, 2, 3, 4, '5'];
//console.log(books[4])

function readBook(id: number | string): void{
    console.log(id);
}
//const book1 = readBook(2);

// Literal Types
let color: 'red';
color = 'red' // VALID
//color = 'blue' // INVALID
console.log(color);

let isTrue: false | true;
isTrue = false;
