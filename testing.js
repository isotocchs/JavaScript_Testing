// // console.log("Hello World");

// // console.log(true);
// // console.log(123);

// // //var = variable -  you can change it

// var someName = "John Ham";
// // console.log(someName);

// someName = "Tim Apple";
// // console.log(someName);

// // //initialize a variable
// var temp;
// // console.log(temp);

// temp = 45;
// // console.log(temp);

// // //the name of a variable can have letter, numbers, _ or $
// // //but it cannot start with a number
// // var something_Else_Other = 17;
// // //

// // //let - variables that are limited in scope
// // // works the same as var
// let somethingNew = 30;
// // console.log(somethingNew);

// let newName = "Sam Johnson";
// // console.log(newName);
// newName = "Something Else";
// // console.log(newName);

// // //const = constant, cannot be reassigned later
// const theBest = "Michael Jordan";
// // console.log(theBest);
// // theBest = "LeBron James";
// // console.log(theBest);

// // // const must also be initialized with some value, can't just be declared
// // const newThing;

// // Data Types

// // Primitive Types - stored directly on the location the variable accesses

// // String - Words - always in quotes "Apples"
// // Numbers - 1 -2 3 4 5.45
// // Boolean - true or false
// // Null - empty value
// // Undefined - variable that has not been assined info
// // Symbols -

// // Reference Types - info is stored elsewhere. Pointer to another location
// // Arrays - lists of things
// // Object literals
// // Functions
// // Dates
// // Etc.

// // //Strings
// const colors = "blue run grass ";
// // console.log(colors);
// // console.log(typeof colors);

// // //numbers
// const thisIsMyVariableName = "45";
// var age2 = thisIsMyVariableName + 56;
// // console.log(typeof thisIsMyVariableName);
// // console.log(age2);

// // //booleans
// const number3 = 45;
// const hasCar = !(5 == 5);
// // console.log(hasCar);
// // console.log(typeof hasCar);

// // // null
// const carType = null;
// // console.log(typeof carType);
// // console.log(carType);

// // //undefined
// let testing;
// // console.log(typeof testing);

// // //symbol
// const symb = Symbol();
// // console.log(typeof symb);
// // console.log(symb);

// // Reference Types - objects

// // //Arrays - List of things

// const dogBreeds = [
//   "Geraman Shepherd",
//   "Golden Retreiver",
//   "aple",
//   76,
//   12,
//   "Chihuahua",
//   45,
// ];
// // console.log(typeof dogBreeds);
// // console.log(dogBreeds);
// // console.log(dogBreeds[8]);
// // console.log(typeof dogBreeds[1]);
// // console.log(typeof dogBreeds[3]);
// // console.log(dogBreeds.length);
// // console.log(dogBreeds[dogBreeds.length - 1]);

// // //Object Literals
// const chairObj = {
//   numberof_Legs: 4,
//   color: "Black",
//   doesItSpin: true,
//   numbrOfWheels: 4,
//   namesOfChairs: ["Hermes", "Ikea", "Staples", "Office"],
// };

// // console.log(typeof chairObj);
// // console.log(chairObj);
// // console.log(chairObj.doesItSpin);
// // console.log(typeof chairObj.doesItSpin);
// // console.log(chairObj.numbrOfWheels);
// // console.log(typeof chairObj.namesOfChairs);
// // console.log(chairObj.namesOfChairs[1]);

// // //Date
// const today = new Date();
// // console.log(typeof today);
// // console.log(new Date());

// const UserObj = {
//   lastLogIn: today,
// };

// // console.log(UserObj.lastLogIn);

// const gradeOnTest = 80;
// const extraCredit = 50;

// if (gradeOnTest >= 90) {
//   console.log("You got an A");
// } else if (gradeOnTest >= 80) {
//   // console.log("You got an B");
// } else if (gradeOnTest >= 70) {
//   console.log("You got an C");
// } else if (gradeOnTest >= 60) {
//   console.log("You got an D");
// } else {
//   console.log("You got an F");
// }

// // Type conversions
// //from number to String
// var val = 45.5;
// val = String(val);
// val = String(true);
// val = String(false);
// val = String(new Date());
// val = String([1, 2, 3, 4, 5]);
// val = (45).toString();

// const something = 8923;
// val = something.toString();
// // console.log(val + 23);

// // console.log(val);
// // console.log(typeof val);

// //From String to number
// // val = Number("45");
// // val = Number(true);
// // val = Number(false);
// // val = Number(null);
// // val = Number("twenty");
// // val = Number([1, 2, 3, 4, 5]);

// // console.log(val);
// // console.log(typeof val);

// //Equations
// const num1 = 10.55;
// const num2 = 20;
// let solution;

// solution = num1 + num2 + 5 * 2;
// // solution = num1 * num2;
// // solution = num1 - num2;
// // solution = num1 / num2;
// // solution = num1 % num2;

// // console.log(solution);

// // Math
// solution = Math.PI;
// // console.log(Math.PI);
// solution = Math.E;
// solution = Math.round(num1);
// solution = Math.ceil(2.3); //rounds up
// solution = Math.floor(2.7); //rounds down
// solution = Math.sqrt(64);
// solution = Math.cbrt(27);
// solution = Math.abs(-67);
// solution = Math.pow(8, 3);
// //first number to the power of the second number
// solution = Math.min(2, 3, 4, 67, 1, 89, 4);
// solution = Math.max(2, 3, 4, 67, 1, 89, 4);
// solution = Math.random();

// //Random number from 0 to 45?
// // solution = Math.floor(Math.random() * 45 + 1);
// //solution = Math.floor(Math.random()*(max-min)+min)
// // console.log(solution);

// // String methods
// const firstName = "John";
// const lastName = "Smith";

// let full = firstName + " " + lastName;

// // full = "Tom";
// full += " is Great";

// full = "This is 'awesome'";

// // console.log(full);
// // console.log(full.length);
// let val2 = full.concat(" ", firstName);
// val2 = full + " " + firstName;
// val2 = full.toLowerCase();
// val2 = full.charAt(0).toUpperCase() + full.slice(1);
// val2 = full.toUpperCase();
// val2 = full[full.length - 1];

// val2 = full.indexOf("i");
// val2 = full.indexOf(" is", 5);
// val2 = full.lastIndexOf("i");

// val2 = full.substring(10, 17);

// val2 = full.split(" ");
// val2 = full.slice(4);

// // console.log(val2);

// // for loops
// for (let i = 0; i <= 10; i++) {
// if (i == 2) {
//   // console.log(i);
//   continue;
//   //exits out of the current loop
//   //and goes to the next one.
// }
// if (i == 5) {
//   break;
//   console.log(i + " is my favorite numebr");
//   //stops the loop entirely
// }
// console.log(i + " is my favorite numebr");
// }

// let original = "the dog is brown";
// let reverse = "";

// for (let i = 0; i < original.length; i++) {
//   reverse = original[i] + reverse;
// }

// console.log(reverse);

// // console.log(original[original.length - 1]);

// // while loop

// //do while loop
// let i = 10;
// do {
//   // console.log(i);
//   i--;
// } while (i > 10);

//FUNCTIONS
// function jojo() {
//   console.log("Cool Anime");
//   let i = 10;
//   do {
//     console.log(i);
//     i--;
//   } while (i > 0);
// }

// function cat() {
//   console.log("Meow");
// }

// function lazy() {
//   jojo();
//   cat();
//   cat();
//   cat();
//   cat();
//   cat();
// }

function calculator(bob, john, tim) {
  if (john == "*") {
    return bob * tim;
  }
}

let result = calculator(5, "+", 6);
console.log(result);
