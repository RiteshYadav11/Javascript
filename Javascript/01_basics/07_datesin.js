// const myDate = new Date()

// console.log(myDate);
// console.log(myDate.getDate());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());


// const myNewdate = new Date(2025,0,5,5,3)
// const myNewdate = new Date("02-02-2025")
// console.log(myNewdate.toLocaleString());

// console.log(myNewdate.toLocaleDateString())


// let timeStamp = Date.now()
// console.log(timeStamp);
// console.log(myNewdate.getTime());

// console.log(Math.floor(Date.now()/100))

let myDate = new Date()
// console.log(myDate.getMonth() + 1);

myDate.toLocaleDateString('default',{
    weekday : "long",
})

console.log(myDate.toLocaleDateString('default',{
    weekday : "long",
}))