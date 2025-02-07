// for

// for (let index = 0; index <= 10; index++) {
//     const element = index
//     console.log(element);
// }


// for (let i = 1; i <= 2; i++) {
//     for (let j = 1; j <=10; j++) {
//         console.log(i , "x" , j ,"=" , i*j );
//     }
// }

let arr1 = ["Ritesh" , "Aman" , "Raj" , "Hitesh"]
// console.log(arr1.length);
// for (let index = 0; index < arr1.length; index++) {
//     const element = arr1[index];
//     console.log(element);
    
// }

// break and continue

for (let index = 0; index <= 10; index++) {
    // if (index === 5) {
    //     console.log("Detected 5");
    //     break
    // }
    if (index === 5) {
        console.log("Detected 5");
        continue
    }
    console.log(`The value of i is ${index}`);
}