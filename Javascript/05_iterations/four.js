const myobject = {
    js : "javascript",
    cpp : "C++",
    rb : "Ruby",
    swift : "Swift by apple"
}

for (const key in myobject) {
    // console.log(myobject[key]); 
}


let arr1 = ["Ritesh" , "Aman" , "Raj" , "Hitesh"]

for (const key in arr1) {
    // console.log(key , arr1[key]);
}


const map =new Map()

map.set("IN","India")
map.set("USA","United State Of America")
map.set("IN","India")

for (const key in map) {
    console.log(key);
}