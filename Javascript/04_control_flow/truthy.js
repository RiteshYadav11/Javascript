const useremail = "ritesh@gmail.com"

if (useremail){
    console.log("Yes");
}
else{
    console.log("No");
}

// falsy Vakue

// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// Truthy Value 

// "0" , "false" , " " , [] , {} , function(){}

const username = []

if (username.length === 0) {
    console.log("Array is empty")
}

const obj1 = {}
if (Object.keys(obj1).length === 0) {
    console.log("Object is Empty")
}



// Nullish Coalescing Operator(??):  Null undefined

let val1 ;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = null ?? undefined ?? 10
val1 = null ?? 10 ?? 20
console.log(val1);


// Ternary Operator : (?)

// syntax :  condition ? true : false

const one = 1
one === 1 ? console.log('yes one is 1') : console.log("No one is not 1");

