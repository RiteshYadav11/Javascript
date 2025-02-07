// Singleton
// Object.create

// Object Literals
const mysum = Symbol("Key1")

const jsUser = {
    name : "Ritesh",   // here name act as a string
    "full name" : "Ritesh Yadav",
    [mysum] : "mykey1",
    age : 18,
    email : "riteshyadav@google.com",
    isLogged : false,
    lastlogin : ["Monday" , "Tuesday"]
}

// console.log(jsUser.age);

// console.log(jsUser["email"]);
// console.log(jsUser."full name");   It is not throw error that why we use ["Full Name"]
// console.log(jsUser["full name"]);

// console.log(jsUser[mysum]);
// console.log(typeof jsUser[mysum]);
// console.log(typeof jsUser);

// jsUser.email = "Ritesh@google.com"
// console.log(jsUser);
// Object.freeze(jsUser)
// jsUser.email = "Ritesh@chatgpt.com"

jsUser.greeting = function(){
    console.log("Hello Sir")
}

jsUser.greetingTwo = function(){
    console.log(`Hello Sir, ${this.name}`)
}

// console.log(jsUser);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
