// const number = new Number(100); – Why [Number: 100]?
// What is this?

// new Number(100) creates a Number object, not a primitive number.
// It’s an instance of the Number wrapper class.
// Why does it output [Number: 100] instead of just 100?

// Primitive numbers (let x = 100;) are stored in the stack.
// new Number(100) creates an object in the heap, so it returns an object representation of a number.

// Example:

// const num1 = 100;              // Primitive
// const num2 = new Number(100);  // Object

// console.log(num1);  // 100  (Primitive number)
// console.log(num2);  // [Number: 100] (Object)
// Why avoid new Number()?

// It creates an object, which is slower and unnecessary.
// typeof num1 → "number", but typeof num2 → "object".
// Best practice: Always use primitives (let num = 100;) instead of new Number().




// Wrapper Class in JavaScript

// Wrapper classes are built-in objects that wrap primitive values and provide methods to work with them.
// JavaScript has three main wrapper classes:

// Number → wraps number values
// String → wraps string values
// Boolean → wraps boolean values

// Example:

// let num = 100;                // Primitive number
// let objNum = new Number(100); // Number object (Wrapper class)

// console.log(typeof num);    // "number"
// console.log(typeof objNum); // "object"

// Why Are Wrapper Classes Used?
// They allow primitives to use object methods temporarily.
// Example:

// let str = "hello";
// console.log(str.toUpperCase()); // "HELLO"

// Here, str is a primitive, but JavaScript temporarily wraps it in a String object to use .toUpperCase().


// const num1 = 100
// console.log(num1);

// const num2 = new Number(100)
// console.log(num2);

// console.log(num1.toString().length)
// console.log(num1.toFixed(2))

// const num3 = 123.89889

// console.log(num3.toPrecision(4));

// const hundreds = 100000
// console.log(hundreds.toLocaleString("en-IN"));





// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

                                                    // Math

// console.log(Math)

// console.log(Math.abs(-4))
// console.log(Math.round(2.344))
// console.log(Math.floor(2.344))
// console.log(Math.ceil(2.344))

// console.log(Math.min(4,5,6,7))
// console.log(Math.max(4,5,6,7))


// console.log(Math.floor(Math.random()*10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min)