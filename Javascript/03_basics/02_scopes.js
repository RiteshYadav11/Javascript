let a = 300

if (true){
    let a = 30
    const b = 40
    var c = 50
    // console.log("Inner",a);
    
}

// console.log(a)
// console.log(b) It will throw an error because it is block scope not global scope
// console.log(c)

if(true){
    const username = "Hitesh"
    if (username === "Hitesh"){
        const website = "  youtube"
        // console.log(username + website)
    }
    // console.log(website)  It will throw an error because it is block scope but not in python
}



// +++++++++++++++++++++++++++++++Interesting++++++++++++++++++++++++++++++++++++++++++++++++

addone(2)
function addone(num){
    console.log(num+1);
}

// addtwo(3)  It will throw an error it is also called Hoisting
const addtwo = function(num){
    console.log(num+2);
}
addtwo(3)