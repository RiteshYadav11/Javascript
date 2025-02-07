// Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log("DB CONNECTED");
// }
// chai()

(function chai(){    // named iife
    console.log("DB CONNECTED");
})(); // it donot know when to stop this function so it will thrwo an error to overcome the error we need to put ;
// (function)()  syntax

( (name) => {
    console.log(`DB CONNECTED ${name}` );
})("Ritesh")