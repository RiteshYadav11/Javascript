let name_array = ["Ritesh" , "Aman"]
let friend_array = ["Rahul" , "Anurodh" , "Deepak" , "Amit" , "Gaurav"]

// name_array.push("Sourabh")
// console.log(name_array)
// console.log(name_array[0]);


// let merge_name_array = name_array.concat(friend_array)   Instead of this we use spread array
// console.log(merge_name_array)


// console.log(merge_name_array)
// console.log(merge_name_array[0]);

// let another_method = [...name_array , ...friend_array]
// console.log(another_method);


// const another_array = [1 , 2 , 3 , [4 , 5 , 6 , 7] , [8 , 9 , [1 , 3 , 4 , [1 , 4 , 5] , 5] , 6], 8]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


// const isArray = Array.isArray("Ritesh")
const isArray = Array.from("Ritesh")
console.log(isArray);

let score1 = 100
let score2 = 200
let score3 = 300

const add_number = Array.of(score1 , score2 , score3)
console.log(add_number);
