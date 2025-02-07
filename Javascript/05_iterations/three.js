// for of 

// const arr = ["Ritesh" , "Aman" , "Raj" , "Hitesh"]
// for (const val of arr) {
//     console.log(val);
// }

// const string = "Hello Ritesh"
// for (const str of string) {
//     console.log(str);
    
// }

// Map

const map =new Map()

map.set("IN","India")
map.set("USA","United State Of America")
map.set("IN","India")

console.log(map);

for (const [key , value] of map) {
    // console.log(`key = ${key} and value = ${value}`)
}

const myobject = {
    "game1" : "Spiderman",
    "game2" : "PUBG"
} 

// for (const [key,value] of myobject) {
//     console.log(`key = ${key} and value = ${value}`)
// }   TypeError: myobject is not iterable using forof   
