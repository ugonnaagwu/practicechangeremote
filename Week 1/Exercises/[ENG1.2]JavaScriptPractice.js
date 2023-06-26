// 11111111111111
// Variables, Execution Control:
console.log("basic types and constants");
// constants
const myNumber = 1;
const myWord = "tree";
console.log(myNumber);
console.log(myWord);

// const vs let
const constantNumber = 2;
console.log(constantNumber);
// TODO Var-1: Uncomment the next line and reload the file.  What error do you get?  Why?
// constantNumber = 3;

// TODO Var-2: Create a variable that will hold a number, and assign it a number less than 10
// TODO Var-3: Continuing the previous TODO, add a statement that will print "Hello X" if the variable is less than 10.
//                It should print "Good bye" number is less than 5
// OPTIONAL TODO Var-4:
//             Continuing on, add a loop that will keep increasing the variable, only stopping when it reaches 20
//                Print out the value of the variable each time through the loop

// Arrays
console.log("arrays");
const scores = [1, 2, 3];
console.log(scores);
console.log(`scores[1]: ${scores[1]}`);
// TODO Var-5: use a loop to print all the elements of scores

// 222222222222222222
console.log("functions");
// Named function
function addf(a, b) {
  return a + b;
}
console.log(addf(2, 3));

// Anonymous function
let addedf = function (x, y) {
  return x + y;
};

// TODO Fnx-1: Create additional, anonymous, arithmetic functions to practice

// 3333333333333333
// Class

console.log("classes");

// Look at the Calculator class below, then come back and do these exercises:
// TODO Class-1: add the subtract function (without parameters like add)
// TODO Class-2: explain what the constructor does, why it's useful, and how to add a contructor to an existing class

class Calculator {
  a;
  b;
  constructor(_firstNumber, secondNumber) {
    this.a = _firstNumber;
    this.b = secondNumber;
  }
  add() {
    return this.a + this.b;
  }
}

const myCal = new Calculator(2, 5);
myCal.a = 3;
console.log(`myCal.add: ${myCal.add()}`);

// class inheritance
class comparisonCalculator extends Calculator {
  findGreaterValue() {
    if (this.a > this.b) {
      return this.a;
    } else {
      return this.b;
    }
  }
}

const compCalc = new comparisonCalculator(6, 7);
console.log(`compCalc.add: ${compCalc.add()}`);
console.log(`compCalc.findGreaterValue: ${compCalc.findGreaterValue()}`);
// TODO Class-3: examine the above example, and then be prepared to explain
//                  how inheritance was used to create a new class that can both
//                  add and compare the two values, without having to copy-and-paste
//                  the 'add' method a second time

// 4444444444444444444
// Object Literals
console.log("objects");
const rectangle = { length: 4, width: 5 };
console.log(rectangle);
console.log(`rectangle.length ${rectangle.length}`);
rectangle.width = 7;

// TODO ObjLit-1: Print out the rectangle's current width
// TODO ObjLit-2: use an if/else to figure out whether the rectangle's length or width is greater,
//                  and print a message to the user telling them which is greater and what the current value is

// Reference vs copy
console.log("Reference");
const polygon = rectangle;
polygon.width = 1;
console.log(`polygon.width: ${polygon.width}`);
console.log(`rectangle.width: ${rectangle.width}`);
// TODO ObjLit-3:  Did the value of rectangle.width change?

console.log("Copy");
const copyRect = { ...rectangle };
// can also choose to use Object.assign
copyRect.width = 10;
console.log(`copyRect.width: ${copyRect.width}`);
console.log(`rectangle.width: ${rectangle.width}`);
// TODO ObjLit-4:  Did the value of copyRect.width change?  Did the value of rectangle.width change?  Why?

// 5555555555555555555
// Fat Arrow (Lambda Functions)
console.log(" =>  functions");
// TODO Lambda-1: Write addfa, a version of add and added that uses fat arrow
//                    Compute 6+12 with addfa

// TODO Lambda-2:

// 6666666666666666666
// Using the 'map' function
console.log(" Using .map()");

let nums = [1, 2, 5, 6, 10, 20, 100, 200];
let text = ["Hi", "Hola", "Bonjour", "привет"];

// TODO Map-1: Write a line of code that will print out each element
//              of the 'nums' array, 1 item per line

// TODO Map-2: Do the same thing for the 'text' array

// TODO Map-3: Write a line of code that will print out each element
//              of the 'text' array.  In addition, the function
//              should print out <li> before each item and </li> after

// TODO Map-4: Make sure that you can print out nums too, surrounding
//              each item with <li> and </li> like in the prior TODO

// 7777777777777777777
// Using the 'filter' function
console.log(" Using .filter()");

// TODO Filter-1: Starting with the 'nums' array, create a new array that only has numbers less than 20

// TODO Filter-2: Starting with 'nums', print all the elements that are larger than 20
//                  NOTE: There's multiple ways of doing this
