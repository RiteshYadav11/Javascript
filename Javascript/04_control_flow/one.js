// if
// isloggedIn = true
// if(isloggedIn){
//     console.log("Yes");
// }

// if (3!=2){
//     console.log("Yes 3!=2");
// }

// let age = 24
// if (age>18){
//     console.log("Eligible");
// }
// else{
//     console.log("Not Eligible");
// }


// const balance = 1000
// if (balance < 500) {
//     console.log("Less than 500");
// } else if(balance < 900){
//     console.log("Less than 900");
// }else{
//     console.log("greater than 1000");
// }

// if (2===2) console.log("Yes"),console.log("Ha");  Not prefer

const userlogged = true
const debitcard = true
const isLoggedInFromEmail = false
if (userlogged && debitcard && 2===2){
    console.log("Yes");
}


if (userlogged && debitcard || isLoggedInFromEmail){
    console.log("Yes");
}