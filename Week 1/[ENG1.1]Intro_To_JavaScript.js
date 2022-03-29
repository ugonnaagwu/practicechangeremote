`cdconsole.log("Hello, World!");

/************************************************************************
 * Variables
 ***********************************************************************/
console.log("----------"); // semi-colon ( ; ) is OPTIONAL at the end of a line
console.log("Variables"); // you can put them in or leave them out, your choice

//Boolean - true/false
// 'let' means 'I'm declaring (creating) a variable which CAN change
let isIceCreamCold = true;
isIceCreamCold = false; // I really should have eaten it faster
isIceCreamCold = true; // after I put it back in the freezer

//Constants can NOT be changed, uncomment line 17 to see the error
const canTChangeThisNumber = 15;
// canTChangeThisNumber = 20 // uncomment this line to see the error
let canChangeThisNumber = 1;
canChangeThisNumber = -1;

var x = 10; // var is similar to let
// Nowadays you should use `let` instead of `var`
// - a lot of older code uses `var` so it's important
// to know what it means, but we should all be using `let` now.

// BONUS EXTRA DETAIL:
//Let scopes a variable to the block, defined by {}, uncomment to see the error
{
  // yes, you can just add extra (matching) pairs of {} if you want :)

  var unscopedVar = "I'm a var";
  let scopedLet = "I'm a let";

  console.log(unscopedVar, scopedLet);
  {
    let scopedLetInsideBlock = "I'm a let inside a block";
    console.log(scopedLetInsideBlock);
  }

  // console.log(scopedLetInsideBlock) // ReferenceError
  console.log("We are still here:", unscopedVar, scopedLet);
}

//Number
// All numbers can hold decimal places.
// Integers are just numbers without anything after the decimal place
let king = 23;
let queen = 23.5;

// WHAT DOES THE FOLLOWING LINE PRINT, AND WHY?
console.log(
  "Numeric value of king: ",
  king,
  " Numeric value of queen: ",
  queen
);

//String (text)
// Can use double "" or single ' '
let color = "blue's my favorite color"; // note clever use of "" so that we can use ' inside the ""
color = "teal's my favorite color"; // \' means actually put a single ' in the variable

//String interpolation (aka 'how to put a variable's value inside a string')
// Start/end strings with backticks ( ` ) and you can embed
// JS expressions inside ${ }
// This includes using variables
// WHAT DOES THE FOLLOWING LINE PRINT, AND WHY?
console.log(
  `Numeric value of king ${king} Numeric value of queen: ${queen}.  My friend's take on colors: ${color}`
);

// String Interpolation when we're not immediately printing the value:
let sentence = `When I mentioned teal, my friend said "${color}".  I appreciated their input`;

// WHAT DOES THE FOLLOWING LINE PRINT, AND WHY?
console.log("String sample:", sentence);

// Can also do math inside the ${  }
sentence = `The numeric value of two kings: ${king * 2}`;
console.log("Quick Math sample:", sentence);

//Arrays index start with 0
let prime = [2, 3, 5, 7, 11, 13, 17, 19, 23];
// WHAT DOES THE FOLLOWING LINE PRINT, AND WHY?
console.log("The first nine prime numbers are:", prime);

// WHAT DOES THE FOLLOWING LINE PRINT, AND WHY?
console.log("The third prime number is:", prime[2]);

prime[2] = 2021;
// WHAT DOES THE FOLLOWING LINE PRINT, AND WHY?
console.log("The third prime number is:", prime[2]);

console.log("----------");

/************************************************************************
 * Control Flow, aka Execution Control
 ***********************************************************************/
console.log("Control Flow");

// WHAT DOES THE FOLLOWING LINE PRINT, AND WHY?
if (king > 20) {
  // TIP: Always surround the body of the 'if' in curly braces { }
  console.log("King is greater than 20");
}

if (king < 30)
  // Single program statements do not need to be surrounded by {}'s
  // (Comments don't count as a program statement)
  console.log("King is less than 30;");

// JS has logical operators too:
//    AND is &&
//    OR is ||
//    NOT is !
// WHAT DOES THE FOLLOWING LINE PRINT, AND WHY?
if (king > 20 && king < 30) {
  console.log("King is between 20 and 30");
}

// WHAT DOES THE FOLLOWING LINE PRINT, AND WHY?
if (king < 10 || queen > 20) {
  console.log(
    "The king is  less than 10, or the queen is greater than 20, or maybe both"
  );
}

while (king < queen) {
  console.log(
    `Current value of the king: ${king} Current value of the queen:${queen}`
  );
  king = king + 1; // you can also write this as king++
  // king++ is the more common way to do this in JavaScript
  // but if you're more familiar/comfortable with king = king + 1 from
  // other languages you can still use that here
}

// WHAT DOES THE FOLLOWING LINE PRINT, AND WHY?
//counting 'for' loop:
for (squire = 10; squire < 20; squire++) {
  console.log(`Current value of the squire: ${squire}`);
}

// WHAT DOES THE FOLLOWING LINE PRINT, AND WHY?
// 'foreach' loop, called a 'for..in' loop here in JavaScript:
// Unlike some other languages,
// IndexOfElement is the INDEX of the next array slot
// NOT the value itself
for (let IndexOfElement in prime) {
  console.log(
    `The next element in the array is: ${prime[IndexOfElement]}, which I found in slot ${IndexOfElement}`
  );
}

console.log("----------");

/************************************************************************
 * Functions
 ***********************************************************************/

// - Functions are building blocks of applications in JS.
// - They're used for abstraction. JS also has classes, name spaces, and modules.
// - Functions can be named or anonymous.
//     - _Why is it important at this stage?_
// - parameters are optional, even if you declared the function to have a parameter
//     - Parameters are what's passed into the function.

console.log("Functions");

//Named function
function add(a, b) {
  return a + b;
}
// WHAT DOES THE FOLLOWING LINE PRINT, AND WHY?
console.log("Function add:", add(2, 3));

//Anonymous function (which we then assign to a local variable named 'added')
// React does this a lot - assign a function to a variables and then call it from those variables
let added = function (x, y) {
  return x + y;
};
console.log("Function added:", added(2, 3));

// WHAT DOES THE FOLLOWING LINE PRINT, AND WHY?
console.log(
  "Function add:",
  add("sun", "flower"),
  "add was not typed so it can also take string datatypes."
);

console.log("----------");
/************************************************************************
 * Classes
 ***********************************************************************/
// - In object-oriented programming languages, like JS,
//    A class is a template for creating objects.
//    Classes are only available in more recent versions of JS (from 2015 onwards).
// - A class contains properties, constructors, and methods.
//    Constructors are methods automatically invoked (run)
//    when an instance of the class is created.
// - `new` is used to construct an instance of the class.
// - In a class, `this.` denotes that it's referring to one of the members in the class.
//
// - JS also introduces inheritance. Inheritance extends classes.
//     - Classes inherit properties and methods from the base class.
//     - View the [animal class example](https://www.JavaScriptlang.org/docs/handbook/classes.html#inheritance).

// We will use classes in React to create new on-screen components.
// For example,
// A list of todo items could be created by making a class that will generate
//    the HTML to show all the list items.
// We then put an instance of that class on the screen (on the web page)
//    in order to show the list of items

//  {} has several meanings, depending on the context
//    - In a function like this is surrounds a "block" of code
//    - In a class to tells JavaScript what variables & functions are included in the class
//    - In can also define an object literal
//          (which you can put anywhere that you'd write a number, string or variable)
//    - Inside of React's JSX, it functions as a way to escape fom JSX back into JavaScript
//    - and you can put {} inside of other {}

console.log("Classes");

//This contact class has two properties and one method
class Contact {
  // Here the { means that everything after this
  // (until the matching close }) is part of the 'Contact' class
  name;
  phone;

  constructor(flNames, pnum) {
    // Here the { means that we're starting a function (a block of code)
    this.name = flNames;
    this.phone = pnum;
    console.log(this.name, "added to system");
  }

  printBusinessCard() {
    console.log(
      "The business card for",
      this.name,
      "is",
      this.name,
      this.phone
    );
  } // This } ends the printBusinessCard function/method
} // This } ends the definition of the Contact class

//SalesPerson adds another method to Contact for objects of that extended class
class SalesPerson extends Contact {
  salesNoise() {
    console.log("Ring ring phone call for", this.name);
  }
}

const pam = new Contact("Pam Beasley", 5558885555);
const jim = new SalesPerson("Jim Halpert", 5554444434);

// WHAT DOES THE FOLLOWING LINE PRINT, AND WHY?
pam.printBusinessCard();

// WHAT DOES THE FOLLOWING LINE PRINT, AND WHY?
jim.printBusinessCard();

// WHAT DOES THE FOLLOWING LINE PRINT, AND WHY?
jim.salesNoise();
//Uncomment to see error
//pam.salesNoise()

//////////////////////////////////////// React-Focused Stuff Starts Here ////////////////////
// functional programming f(x) = x + 2
console.log("----------");
/************************************************************************
 * Object Literals
 ***********************************************************************/

// - An 'object literal' is similar to a 'number literal' like **3** or a string literal like **"This is some text"** - we're creating an object directly in memory *without first having to define a class*.
//     - This is different than strongly-typed languages like C, C++, Java, C#, and even Python, where you need to define the class first.
// - An object represents key value pairs that describe something.
//     - For example, if we wanted to store information about a rectangle with a length of 10 and a width of 15 then we might create an object with two pairs of data. In the first pair, the key is **length** and it's value is 10.  In the second pair it's key is **width** and it's value is 15.
//     - A contact may have name, phone number and address.
// - Reference - creates an additional name for the same object. Changing a value in the reference object, changes the original object.
// - Copy - creates a copy (clone) of the object. Changing the copy object will not impact the original object.

// Knowing how to copy and object is important in React
// Because we will update our program's state (i.e., the current value of all it's variables)
// by making multiple COPIES of our state (instead of modifying a single object over and over)

// Remember that {} has several meanings, depending on the context
//    - In a function like this is surrounds a "block" of code
//    - In a class to tells JavaScript what variables & functions are included in the class
//    - In can also define an object literal
//          (which you can put anywhere that you'd write a number, string or variable)
//    - Inside of React's JSX, it functions as a way to escape fom JSX back into JavaScript
//    - and you can put {} inside of other {}

let num = 20;
let myText = "this is my string literal";

console.log("Object Literals");

let boss = {
  // Here { means that the stuff that follows is part of a literal object
  name: "Michael Scott", // notice that inside object literals we
  phone: "555-555-5555", // use : instead of =
  address: "Scranton, PA",
};
console.log("The world's best boss is:", boss.name, boss.phone, boss.address);

//Assigning another variable to an object results in a references to an object
// (NOT a copy of the object)
let bestBoss = boss;
boss.phone = "+1555-555-555";
console.log(
  "The world's best boss is still:",
  boss.name,
  boss.phone,
  boss.address
);

//Copy of an object
let newBoss = { ...boss };
// ... means 'unpack all the parts of the boss object'
// {   } means 'put everything in the curly braces into a new object'
newBoss.name = "Andy Bernard";
console.log("The new boss is:", newBoss.name, newBoss.phone, newBoss.address);
console.log(
  "The wold's best boss remains:",
  boss.name,
  boss.phone,
  boss.address
);

console.log("----------");
/************************************************************************
 * Creating functions using the fat arrow operator =>
 ***********************************************************************/
// - Fat arrow notation (`=>`) is used for anonymous functions.
//      They are also called lambda functions.
// - We drop the need of the `function` keyword and use `let`.
// - This notation separates the parameters (left-hand side) from
//      the function body (right_hand side).
// - Arrow functions are useful because they use the 'lexical this',
//      meaning that they use 'this' from the surrounding code

// Remember that {} has several meanings, depending on the context
//    - In a function like this is surrounds a "block" of code
//    - In a class to tells JavaScript what variables & functions are included in the class
//    - In can also define an object literal
//          (which you can put anywhere that you'd write a number, string or variable)
//    - Inside of React's JSX, it functions as a way to escape fom JSX back into JavaScript
//    - and you can put {} inside of other {}

console.log("Functions using fat arrow =>");

// different ways to compute 2*x

// original JS syntax for defining a function
function mult2_js(x) {
  return 2 * x;
}
console.log("mult2_ts", mult2_js);

//define a function using =>, then assign that function to the sayHi variable:
let sayHi = () => {
  // ->
  // defining a lambda function (which is still a function)
  // so the open { tells JavaScript where the code for this function starts
  return "Hello!!!";
}; // This } closes / ends the lambda function we just created
console.log(sayHi());

// Same as the prior example, except we added in a parameter:
let mult2_b = (x) => {
  // start of function / code block
  return 2 * x;
}; // end of function / code block

console.log("mult2_b", mult2_b(6));

// If you leave out the { and } then you automatically return the value
// (In this format you can only have ONE expression)
let mult2_c = (x) => 2 * x ;

console.log("mult2_b", mult2_c(6));

// Avoid the following syntax if you can (just to have 1 less thing to remember :) )
// (Don't use it, but you will see code that uses it, so make sure you understand it)
var mult2_function_expression = function (x) {
  return 2 * x;
};
console.log("mult2_js", mult2_function_expression(9));

console.log("----------");
/************************************************************************
 * Passing Functions as parameters to map
 ***********************************************************************/
console.log("Passing Functions as parameters to map");

// an array of strings
let myarray = ["Microsoft", "TNTs"];

// printing the array with map. map calls the function as parameters on each element of the array
console.log("Printing the array with map");

// Create a function that will print it's first parameter and ignore any others:
let printIt = (value) => console.log(value);
let awesomeness = (value) => value + " is awesome";

// print the array using map
let newArray = myarray.map(awesomeness);

console.log("Printing the array with map - create the function as we call map");
myarray.map((value) => console.log(value));

console.log(
  "Printing the array with map - why not just pass console.log directly?"
);

// What if we use console.log directly?
myarray.map(console.log);
// We'll get:
// Microsoft 0 (2) ["Microsoft", "TNTs"]
// Because map calls our function (console.log) with
//    the value -   "Microsoft"
//    the index of that value -   0
//    the entire array -   (2) ["Microsoft", "TNTs"]
// and because Console.log will print out all of it's parameters

// What if we wanted to generate a list of items for an HTML unordered list?
let items = myarray.map((value) => `<li>${value}</li>`);
console.log("items: ");
items.map(printIt);

// this is the same as `<ul>${items}</ul`
// The back-tick strings are a relatively addition to JS
// so you'll see lots of examples online that look like this:
let wholeList = "<ul>" + items.join(" ") + "</ul>";

// .join(' ') says to join the array items with a blank space
// if we didn't call .join then it would use a comma instead
// try removing the .join and see what happens!

console.log("Whole list: " + wholeList);

console.log("----------");
/************************************************************************
 * Passing Functions as parameters to filter
 ***********************************************************************/
console.log("Passing Functions as parameters to filter");
console.log(
  "filter - I want a new array that only has prime numbers greater than 5"
);

function isBiggerThanFiveFnx(num) {
  if (num > 5) return true;
  // if num > 5 is true, then return true
  else return false; // if num > 5 is false, then return false
}

let bigPrimes = prime.filter(isBiggerThanFiveFnx);
console.log(bigPrimes);

console.log("filter - only prime numbers greater than 5, but more concisely");

function isBiggerThanFiveConciseFnx(num) {
  return num > 5; // return whether num is > 5 or not
}

let bigPrimesConcise = prime.filter(isBiggerThanFiveConciseFnx);
console.log(bigPrimesConcise);

console.log("filter - only prime numbers greater than 5, with arrow functions");

let bigPrimesReallyConcise = prime.filter((num) => num > 5);
console.log(bigPrimesReallyConcise);
