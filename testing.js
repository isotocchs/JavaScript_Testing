// console.log("Hello World");

// console.log(true);
// console.log(123);

// //var = variable -  you can change it

var someName = "John Ham";
// console.log(someName);

someName = "Tim Apple";
// console.log(someName);

// //initialize a variable
var temp;
// console.log(temp);

temp = 45;
// console.log(temp);

// //the name of a variable can have letter, numbers, _ or $
// //but it cannot start with a number
// var something_Else_Other = 17;
// //

// //let - variables that are limited in scope
// // works the same as var
let somethingNew = 30;
// console.log(somethingNew);

let newName = "Sam Johnson";
// console.log(newName);
newName = "Something Else";
// console.log(newName);

// //const = constant, cannot be reassigned later
const theBest = "Michael Jordan";
// console.log(theBest);
// theBest = "LeBron James";
// console.log(theBest);

// // const must also be initialized with some value, can't just be declared
// const newThing;

// Data Types

// Primitive Types - stored directly on the location the variable accesses

// String - Words - always in quotes "Apples"
// Numbers - 1 -2 3 4 5.45
// Boolean - true or false
// Null - empty value
// Undefined - variable that has not been assined info
// Symbols -

// Reference Types - info is stored elsewhere. Pointer to another location
// Arrays - lists of things
// Object literals
// Functions
// Dates
// Etc.

// //Strings
const colors = "blue run grass ";
// console.log(colors);
// console.log(typeof colors);

// //numbers
const thisIsMyVariableName = "45";
var age2 = thisIsMyVariableName + 56;
// console.log(typeof thisIsMyVariableName);
// console.log(age2);

// //booleans
const number3 = 45;
const hasCar = !(5 == 5);
// console.log(hasCar);
// console.log(typeof hasCar);

// // null
const carType = null;
// console.log(typeof carType);
// console.log(carType);

// //undefined
let testing;
// console.log(typeof testing);

// //symbol
const symb = Symbol();
// console.log(typeof symb);
// console.log(symb);

// Reference Types - objects

// //Arrays - List of things

const dogBreeds = [
  "Geraman Shepherd",
  "Golden Retreiver",
  "aple",
  76,
  12,
  "Chihuahua",
  45,
];
// console.log(typeof dogBreeds);
// console.log(dogBreeds);
// console.log(dogBreeds[1]);
// console.log(typeof dogBreeds[1]);
// console.log(typeof dogBreeds[3]);
// console.log(dogBreeds.length);
// console.log(dogBreeds[dogBreeds.length - 1]);

// //Object Literals
const nameOfMyObject = {
  name: "John Smith",
  age: 23,
  height: 6.4,
  smart: true,
  gobbbbbeeeee: 34.78,
  dogs: ["Geraman Shepherd", "Golden Retreiver", "Chihuahua"],
};

console.log(typeof nameOfMyObject);
console.log(nameOfMyObject);
console.log(nameOfMyObject.name);
console.log(typeof nameOfMyObject.name);
console.log(nameOfMyObject.gobbbbbeeeee);
console.log(typeof nameOfMyObject.gobbbbbeeeee);
console.log(nameOfMyObject.smart);
console.log(typeof nameOfMyObject.smart);
console.log(nameOfMyObject.dogs);

// //Date
// const today = new Date();
// console.log(typeof today);
// console.log(today);
