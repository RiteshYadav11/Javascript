const user = {
    username : "Ritesh",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
    }
}

// user.welcomeMessage()


// console.log(this);


// function chai(){
//     const username = "ritesh"
//     console.log(this.username); // It will not print username it will print undefined ye sirf object me kam kar raha hai
// }
// chai()


// const   chai = function(){
//     let username = "Ritesh"
//     console.log(this.username); // it will also print undefined
//        console.log(this);  //it will print all methods
// }
// chai()

// const   chai = () => {
//     let username = "Ritesh"
//     console.log(this.username); // it will also print undefined
//     console.log(this); //it will not print all methods
// }
// chai()


// const add = (num1,num2) => {
//     return num1+num2
// }  //curly braces me return likna padega
// console.log(add(2,2))


// implicit return
// const add = (num1,num2) => num1+num2   

// const add = (num1,num2) => (num1+num2)  //() ye bracket me return nhi lina padega

const add = (num1,num2) => ({username : "Ritesh"}) 
console.log(add(2,2))