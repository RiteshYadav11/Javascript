// function addTwoNumber (number1,number2){
//     console.log(number1 + number2);   
// }


// function addTwoNumber (number1,number2){
//     let result = number1 + number2  
//     return result
// }

// function addTwoNumber (number1,number2){
//     return number1 + number2 
// }

// let output = addTwoNumber(3,4)
// console.log(output);


function logged(name =  "sam"){
    // if(name === undefined){
    if(!name){
        return "Please enter valid name"
    }
    else{
    return `${name} is logged in`
    }
}

// let username = logged("Ritesh");

let username = logged();    // output = undefined is logged in
// console.log(username);   


function calculateprice(val1 , val2 , ...num1){
    console.log(num1)
}

calculateprice(100,200,300,400)

const user = {
    name : "Ritesh",
    price : "Free"
}

function getobject(anyobject){
    console.log(`Hello ${anyobject.name} and price is ${anyobject.price}`)
}

// getobject(user)

// getobject({
//     name : "Aman",
//     price : "Free"
// })

const newArray = [1,2,3,4,5]

function returnsecondvalue(arr){
    console.log(arr[0]);
}

returnsecondvalue(newArray)