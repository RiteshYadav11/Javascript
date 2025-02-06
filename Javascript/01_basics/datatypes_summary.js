// Primitive

// 7 types : String, Number, Boolean, Symbol, Null , undefined, Bigint

// Non Primitive : 
// Array , Object , Function

let name = "Ritesh" ;

let rollnumber = 123 ;

let eventid = 123.4 ;

let isLogged = true ;

let age = null ;

let sessionid ;

const biggernumber = 2222222222222222222222n;


let username = ["Ritesh" , "Aman" , "Rahul"]

let dict = {
    "name" : "Ritesh",
    "age" : 20,
    "egilible" : true
}

console.log(typeof age);
console.log(typeof sessionid);
console.log(typeof biggernumber,"Hii");

console.log(username);

const myfunc = function(){
    console.log("Hello Ritesh")
}

myfunc()




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) , Heap(Non Primitive)

let userupi = "ritesh@ybl"

let userupiid = userupi

userupiid = "aman@ybl"
console.log(userupi);
console.log(userupiid);

let userOne = {
    email : "Ritesh@gmail.com",
    userid : "1234"
}
console.log(userOne);

let userTwo = userOne

userTwo.email = "Aman@gmail.com"
console.log(userOne);
console.log(userTwo);

// Stack and Heap in JavaScript
// Stack (Primitive Data Storage - Faster)
// Stores primitive values (number, string, boolean, null, undefined, symbol, bigint).
// Uses Last In, First Out (LIFO) structure.
// Memory is automatically managed (removed when not needed).
// Example:

// let x = 10;  // Stored in Stack
// let y = x;   // Copy of x is created
// y = 20;      // Changing y does not affect x

// console.log(x); // 10
// console.log(y); // 20

// Heap (Non-Primitive Data Storage - Slower)

// Stores objects, arrays, and functions (reference types).
// Values are stored in memory, and variables hold references (pointers) to them.
// Example:

// let obj1 = { name: "Alice" }; // Stored in Heap
// let obj2 = obj1;  // Reference to the same object
// obj2.name = "Bob"; // Changes affect both

// console.log(obj1.name); // "Bob"
// console.log(obj2.name); // "Bob"


// Conclusion
// Primitives use stack memory (copied values) → Changes don’t affect the original.
// Objects/arrays/functions use heap memory (referenced values) → Changes affect all references.