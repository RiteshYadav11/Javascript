// What is Hoisting in JavaScript?
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope during the execution phase.

// In simple words:

// You can use functions and variables before declaring them.
// But, variables declared with var will be undefined until assigned a value.
// let and const are hoisted but stay in the Temporal Dead Zone (TDZ) until initialized.
// 1. Hoisting with var
// Variables declared with var are hoisted but initialized as undefined.

console.log(a);  // undefined (hoisted but not assigned)
var a = 10;
console.log(a);  // 10
// ✅ Behind the scenes, JavaScript moves the declaration to the top:

var a;  // Declaration is hoisted
console.log(a);  // undefined
a = 10;  // Assignment happens here
console.log(a);  // 10

// 2. Hoisting with let and const
// Variables declared with let and const are hoisted but not initialized. They remain in the Temporal Dead Zone (TDZ) until their definition is encountered.

console.log(b);  // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b);

console.log(c);  // ❌ ReferenceError
const c = 30;
// 🚨 Key difference:

// var → Hoisted and initialized as undefined.
// let & const → Hoisted but NOT initialized (TDZ error).
// 3. Hoisting with Functions
// Function Declarations (Hoisted ✅)
// Functions declared using the function keyword are fully hoisted.


greet();  // ✅ Works due to hoisting

function greet() {
    console.log("Hello!");
}

// JavaScript moves the function declaration to the top:


function greet() {
    console.log("Hello!");
}
greet();
// Function Expressions (Not Hoisted ❌)
// Function expressions (using var, let, or const) are not hoisted.


sayHello();  // ❌ TypeError: sayHello is not a function

var sayHello = function () {
    console.log("Hi!");
};
// 🚨 Why?

// var sayHello is hoisted as undefined.
// But undefined() is not a function → Error.
// Same for let and const:

greetMe();  // ❌ ReferenceError
let greetMe = function () {
    console.log("Hey!");
};
// 4. Summary of Hoisting Behavior
// Declaration Type	Hoisted?	Initialized?	Can Access Before Declaration?
// var	✅ Yes	✅ As undefined	✅ Yes (but undefined)
// let	✅ Yes	❌ No (TDZ)	❌ No (ReferenceError)
// const	✅ Yes	❌ No (TDZ)	❌ No (ReferenceError)
// Function Declaration	✅ Yes	✅ Yes	✅ Yes
// Function Expression (var)	✅ Yes	❌ No (undefined)	❌ No (TypeError)
// Function Expression (let/const)	✅ Yes	❌ No (TDZ)	❌ No (ReferenceError)
// 5. Best Practices
// Always declare variables at the top to avoid confusion.
// Use let and const instead of var to prevent accidental hoisting issues.
// Declare functions before using them, even though they are hoisted.